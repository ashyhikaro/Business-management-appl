import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function LineChart({title, finances}) {

    const [chartData, setChartData] = useState({
        labels: finances.map((data) => data.day), 
        datasets: [
            {
                label: "Users Gained",
                data: finances.map((data) => data.userGain - data.userLost),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    useEffect(() => {
        setChartData({
            labels: finances.map((data) => data.day).sort((a, b) => a - b), 
            datasets: [
                {
                    label: title === 'Прибутки' ? "Отримано" : title === 'Витрати' ? "Витрачено" : "Кошти",
                    data: finances.sort((item1, item2) => item1.day - item2.day).map((data) => data.userGain - data.userLost),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                }
            ]
        })
    }, [finances])

    return (
        <div className="line_chart_finances">
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <br />
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: false,
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
}

export default LineChart;