import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

function BarChart({title, financeArr, financeType, barType}){

    let labels = []
    let values = []

    if (financeArr) {
        let dataArr = [...financeArr].sort((a, b) => a.day - b.day)

        barType === 'year' ? labels = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
        : dataArr.forEach(item => {
            labels.push(item.day)
        })

        for (let key in dataArr) {
            financeType === 'incomes' ? values.push(dataArr[key].userGain) :
            values.push(dataArr[key].userLost)
        }

    }

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: financeType === 'incomes' ? 'Отримано' : 'Витрачено',
                data: values ? values : [],
                backgroundColor: financeType === 'incomes' ? [
                    'rgba(240, 128, 128, 0.2)',
                    'rgba(250, 128, 114, 0.2)',
                    'rgba(255, 160, 122, 0.2)', 
                    'rgba(255, 165, 0, 0.2)',
                    'rgba(255, 215, 0, 0.2)',
                    'rgba(218, 165, 32, 0.2)',
                    'rgba(154, 205, 50, 0.2)',
                    'rgba(0, 128, 0, 0.2)',
                    'rgba(32, 178, 170, 0.2)',
                    'rgba(70, 130, 180, 0.2)',
                    'rgba(65, 105, 225, 0.2)',
                    'rgba(138, 43, 226, 0.2)'
                ] : [
                    'rgba(176, 196, 222, 0.2)',
                    'rgba(173, 216, 230, 0.2)',
                    'rgba(135, 206, 235, 0.2)',
                    'rgba(30, 144, 255, 0.2)',
                    'rgba(0, 191, 255, 0.2)',
                    'rgba(70, 130, 180, 0.2)',
                    'rgba(65, 105, 225, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 0, 205, 0.2)',
                    'rgba(0, 0, 139, 0.2)',
                    'rgba(25, 25, 112, 0.2)',
                    'rgba(72, 61, 139, 0.2)'
                ],
                borderColor: financeType === 'incomes' ? [
                    'rgba(240, 128, 128, 1)',
                    'rgba(250, 128, 114, 1)',
                    'rgba(255, 160, 122, 1)', 
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 215, 0, 1)',
                    'rgba(218, 165, 32, 1)',
                    'rgba(154, 205, 50, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(32, 178, 170, 1)',
                    'rgba(70, 130, 180, 1)',
                    'rgba(65, 105, 225, 1)',
                    'rgba(138, 43, 226, 1)'
                ] : [
                    'rgba(176, 196, 222, 1)',
                    'rgba(173, 216, 230, 1)',
                    'rgba(135, 206, 235, 1)',
                    'rgba(30, 144, 255, 1)',
                    'rgba(0, 191, 255, 1)',
                    'rgba(70, 130, 180, 1)',
                    'rgba(65, 105, 225, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 205, 1)',
                    'rgba(0, 0, 139, 1)',
                    'rgba(25, 25, 112, 1)',
                    'rgba(72, 61, 139, 1)'
                ],
                borderWidth: 1,
            }
        ]
    };
    
    

    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center"}}>{title}</h2>
            <br />
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
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

export default BarChart;