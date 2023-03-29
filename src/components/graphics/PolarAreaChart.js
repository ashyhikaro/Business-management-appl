import Chart from 'chart.js/auto';
import { PolarArea } from "react-chartjs-2";

function PolarAreaChart({title, financeArr, financeType}){

    let dataArr = financeArr ? [...financeArr] : []
    let labels = []
    let values = []

    let finances_data = {}

    dataArr.forEach(item => {
        let type = item.Type

        let value

        switch (item.Currency) {
            case "USD":
                value = parseFloat(item.Value) * 40;
                break;
            case "EUR":
                value = parseFloat(item.Value) * 40;
                break;
            case "GBP":
                value = parseFloat(item.Value) * 44;
                break;
            case "JPY":
                value = parseFloat(item.Value) * 0.3;
                break;
            case "CNY":
                value = parseFloat(item.Value) * 5.4;
                break;
            default:
                value = parseFloat(item.Value);
        }

        if (type in finances_data) {
            finances_data[type] += parseFloat(value)
        } else {
            finances_data[type] = parseFloat(value)
        }
    })

    for (let key in finances_data) {
        values.push(finances_data[key])
        labels.push(key)
    }

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: financeType === 'incomes' ? 'Отримано' : 'Витрачено',
                data: values,
                backgroundColor: financeType === 'incomes' ? [
                    'rgb(50, 205, 50)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ] : [
                    '#00BFFF',
                    '#E699CC',
                    '#A4C49A',
                    '#66CCCC',
                    '#B266B2',
                    '#808080',
                ],
            }
        ]
    };

    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center"}}>{title}</h2>
            <br />
            <PolarArea
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

export default PolarAreaChart;