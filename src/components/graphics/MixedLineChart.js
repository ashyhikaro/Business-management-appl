import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function MixedLineChart({incomes, costs}) {

    const labelsArr = incomes && costs ? incomes.map((data) => data.day).concat(costs.map((data) => data.day)).sort((a, b) => a - b) :
        incomes && !costs ? incomes.map((data) => data.day) :
            !incomes && costs ? costs.map((data) => data.day) : []

    let incomesArr = incomes ? incomes.sort((item1, item2) => item1.day - item2.day) : []
    let costsArr = costs ? costs.sort((item1, item2) => item1.day - item2.day) : []

    function sortArray(arrayFinance) {
        let arr = arrayFinance

        for (let i = 0; i < arr.length; i++) {
            if (labelsArr[i] !== arr[i].day) {
                arr.splice(i, 0, {id: '', day: labelsArr[i], userGain: 0, userLost: 0})
            }
        }

        return arr
    }

    let incomesArrSorted = incomes ? sortArray(incomesArr).sort((item1, item2) => item1.day - item2.day).map((data) => data.userGain) : []
    let costsArrSorted = costs ? sortArray(costsArr).sort((item1, item2) => item1.day - item2.day).map((data) => data.userLost) : []

    if (labelsArr.length > incomesArrSorted.length) {
        let riznucya = labelsArr.length - incomesArrSorted.length
        labelsArr.splice(incomesArrSorted.length, 2)
    }

    const [chartData, setChartData] = useState({
        labels: labelsArr, 
        datasets: [
            {
                label: "Отримано",
                data: incomesArrSorted,
                backgroundColor: [
                    "rgba(0, 0, 255, 0.8)",
                ],
                borderColor: "rgba(0, 0, 255, 0.)",
                borderWidth: 3
            },
            {
                label: "Витрачено",
                data: costsArrSorted,
                backgroundColor: [
                    "rgba(255, 0, 0, 0.8)",
                ],
                borderColor: "rgba(255, 0, 0, 0.5)",
                borderWidth: 3
            }
        ]
    });

    useEffect(() => {
        setChartData({
            labels: labelsArr, 
            datasets: [
                {
                    label: "Отримано",
                    data: incomesArrSorted,
                    backgroundColor: [
                        "rgba(0, 0, 255, 0.8)",
                    ],
                    borderColor: "rgba(0, 0, 255, 0.7)",
                    borderWidth: 3
                },
                {
                    label: "Витрачено",
                    data: costsArrSorted,
                    backgroundColor: [
                        "rgba(255, 0, 0, 0.8)",
                    ],
                    borderColor: "rgba(255, 0, 0, 0.7)",
                    borderWidth: 3
                }
            ]
        })
    }, [incomes, costs])

    return (
        <div className="mixedline_chart_finances">
            <h2 style={{ textAlign: "center" }}>Прибутки та витрати за місяць</h2>
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

export default MixedLineChart;