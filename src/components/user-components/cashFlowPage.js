import '../../styles/components/cash-flow-page.scss'
import 'react-datalist-input/dist/styles.css';
import DatalistInput, { useComboboxControls } from 'react-datalist-input';
import { useEffect, useState } from 'react';
import LineChart from '../graphics/LineChart';
import PieChart from '../graphics/PieChart';
import BarChart from '../graphics/BarChart';
import MixedLineChart from '../graphics/MixedLineChart';
import { db } from '../..';
import PolarAreaChart from '../graphics/PolarAreaChart';

function CashFlowPage({userData}) {
    const months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

    const [biden, HelloBiden] = useState(true)
    const [ diagramState, setDiagramState ] = useState('line')
    const [ compare, setCompare ] = useState(false)

    const presentYear = String(new Date().getFullYear())
    const presentMonth = String(new Date().getMonth() + 1)

    const [yearFinance, setYearFinance] = useState(presentYear);
    const [monthFinance, setMonthFinance] = useState(months[presentMonth - 1]);

    let incomesArrLine = getFinancesToChart(presentMonth.length < 2 ? '0' + presentMonth : presentMonth, 'income', 'line')
    if (incomesArrLine.length > 0 && incomesArrLine[0] !== 0) {
        localStorage.setItem('incomesArrLineCash', JSON.stringify(incomesArrLine))
    }

    let costsArrLine = getFinancesToChart(presentMonth.length < 2 ? '0' + presentMonth : presentMonth, 'costs', 'line')
    if (costsArrLine.length > 0 && costsArrLine[0] !== 0) {
        localStorage.setItem('costsArrLineCash', JSON.stringify(costsArrLine))
    }

    let incomesArrPie = getFinancesToChart(presentMonth.length < 2 ? '0' + presentMonth : presentMonth, 'income', 'pie')
    if (incomesArrPie.length > 0 && incomesArrPie[0] !== 0) {
        localStorage.setItem('incomesArrPieCash', JSON.stringify(incomesArrPie))
    }
    
    let costsArrPie = getFinancesToChart(presentMonth.length < 2 ? '0' + presentMonth : presentMonth, 'costs', 'pie')
    if (costsArrPie.length > 0 && costsArrPie[0] !== 0) {
        localStorage.setItem('costsArrPieCash', JSON.stringify(costsArrPie))
    }

    if (monthFinance === months[presentMonth - 1]) {
        if (JSON.parse((localStorage.getItem('incomesArrLine'))) !== incomesArrLine && incomesArrLine.length >= 1 && incomesArrLine[0] !== 0) {
            localStorage.setItem('incomesArrLine', JSON.stringify(incomesArrLine))
        }
    
        if (JSON.parse(localStorage.getItem('costsArrLine')) !== costsArrLine && costsArrLine.length >= 1 && costsArrLine[0] !== 0) {
            localStorage.setItem('costsArrLine', JSON.stringify(costsArrLine))
        }
    
        if (JSON.parse(localStorage.getItem('incomesArrPie')) !== incomesArrPie && incomesArrPie.length >= 1 && incomesArrPie[0] !== 0) {
            localStorage.setItem('incomesArrPie', JSON.stringify(incomesArrPie))
        }
    
        if (JSON.parse(localStorage.getItem('costsArrPie')) !== costsArrPie && costsArrPie.length >= 1 && costsArrPie[0] !== 0) {
            localStorage.setItem('costsArrPie', JSON.stringify(costsArrPie))
        }

        if (incomesArrLine[0] === 0 || incomesArrLine === []) {
            localStorage.setItem('incomesArrLine', localStorage.getItem('incomesArrLineCash'))
            localStorage.setItem('costsArrLine', localStorage.getItem('costsArrLineCash'))
            localStorage.setItem('incomesArrPie', localStorage.getItem('incomesArrPieCash'))
            localStorage.setItem('costsArrPie', localStorage.getItem('costsArrPieCash'))
        }
    }

    function getFinancesByMonth(month, financeType) {
        let financeArr = []
        
        try {
            db.ref(financeType).child(userData.id).on('value', elem => {
                let obj = elem.val()
                
                for (let key in obj) {
                    if (key !== '1' && (obj[key].Date.split('-')[2] === yearFinance && obj[key].Date.split('-')[1] === month)) {
                        financeArr.push({id: key, ...obj[key]})
                    }
                }
            })
        } catch(e) {
            console.log(e)
        }

        return financeArr
    }

    function getFinancesToChart(month, financeType, chartType) {
        let financesData = []
        const financeArr = getFinancesByMonth(month, financeType)

        if (chartType === 'pie' || chartType === 'polar') {
            return financeArr
        }

        financeArr.forEach((item, index) => {
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

            financesData.push({
                id: index, 
                day: item.Date.split('-')[0], 
                userGain: financeType === 'income' ? value : 0, 
                userLost: financeType === 'costs' ? value : 0
            })
        });

        if (financesData.length > 0) {
            return financesData
        } else {
            return [0]
        }
        
    }

    useEffect(() => {
        const monthIndex = String(months.indexOf(monthFinance) + 1).length < 2 ? '0' + String(months.indexOf(monthFinance) + 1) 
        : String(months.indexOf(monthFinance) + 1)
        
        const incomeArr = getFinancesToChart(monthIndex, 'income', diagramState)
        const costsArr = getFinancesToChart(monthIndex, 'costs', diagramState)

        if (diagramState === 'line' || diagramState === 'bar') {
            if (JSON.parse((localStorage.getItem('incomesArrLine'))) !== incomeArr && incomeArr.length >= 1 && incomeArr[0] !== 0) {
                localStorage.setItem('incomesArrLine', JSON.stringify(incomeArr))
            }
        
            if (JSON.parse(localStorage.getItem('costsArrLine')) !== costsArr && costsArr.length >= 1 && costsArr[0] !== 0) {
                localStorage.setItem('costsArrLine', JSON.stringify(costsArr))
            }

            if ((JSON.parse((localStorage.getItem('incomesArrLine'))) !== incomeArr && incomeArr.length >= 1 && incomeArr[0] !== 0) && costsArr.length === 1) {
                localStorage.setItem('costsArrLine', JSON.stringify(costsArr))
            }

            if ((JSON.parse(localStorage.getItem('costsArrLine')) !== costsArr && costsArr.length >= 1 && costsArr[0] !== 0) && incomeArr.length === 1) {
                localStorage.setItem('incomesArrLine', JSON.stringify(incomeArr))
            }
        }
        
        if (diagramState === 'pie' || diagramState === 'polar') {
            if (JSON.parse(localStorage.getItem('incomesArrPie')) !== incomeArr && incomeArr.length >= 1 && incomeArr[0] !== 0) {
                localStorage.setItem('incomesArrPie', JSON.stringify(incomeArr))
            }
        
            if (JSON.parse(localStorage.getItem('costsArrPie')) !== costsArr && costsArr.length >= 1 && costsArr[0] !== 0) {
                localStorage.setItem('costsArrPie', JSON.stringify(costsArr))
            }

            if ((JSON.parse(localStorage.getItem('incomesArrPie')) !== incomeArr && incomeArr.length >= 1 && incomeArr[0] !== 0) && costsArr.length === 0) {
                localStorage.setItem('costsArrPie', JSON.stringify(costsArr))
            }

            if ((JSON.parse(localStorage.getItem('costsArrPie')) !== costsArr && costsArr.length >= 1 && costsArr[0] !== 0) && incomeArr.length === 0) {
                localStorage.setItem('incomesArrPie', JSON.stringify(incomeArr))
            }
        }

        if ((yearFinance !== presentYear || String(months.indexOf(monthFinance) + 1) !== presentMonth) && ((incomeArr[0] === 0 && costsArr[0] === 0) || (incomeArr.length === 0 && costsArr.length === 0))) {
            localStorage.setItem('err', 'Немає інформації про даний період')
        } else {
            localStorage.removeItem('err')
        }

        HelloBiden(prev => !prev)
    }, [yearFinance, monthFinance, diagramState])

    return (
        <div className="page">
            <h1 className="title">Аналітика</h1>

            <div className='chart_category__container'>
                <h2>Вид діаграми:</h2>
                <div className='categories'>
                    <button className='line' onClick={() => setDiagramState('line')}>Лінійна</button>
                    <button className='bar' onClick={() => setDiagramState('bar')}>Стовпчикова</button>
                    <button className='pie' onClick={() => setDiagramState('pie')}>Секторна</button>
                    <button className='polar' onClick={() => setDiagramState('polar')}>Мультирівнева</button>

                    <div className='chart_date'>
                        <DatalistInput
                            value={yearFinance}
                            setValue={setYearFinance}
                            placeholder={presentYear}
                            items={[
                                { id: 0, value: String(+presentYear - 5) },
                                { id: 1, value: String(+presentYear - 4) },
                                { id: 2, value: String(+presentYear - 3) },
                                { id: 3, value: String(+presentYear - 2) },
                                { id: 4, value: String(+presentYear - 1) },
                                { id: 5, value: presentYear },
                                { id: 6, value: String(+presentYear + 1) },
                                { id: 7, value: String(+presentYear + 2) },
                                { id: 8, value: String(+presentYear + 3) },
                                { id: 9, value: String(+presentYear + 4) },
                                { id: 10, value: String(+presentYear + 5) },
                            ]}
                        />

                        <DatalistInput
                            value={monthFinance}
                            setValue={setMonthFinance}
                            placeholder={months[presentMonth - 1]}
                            items={[
                                { id: 0, value: 'Січень' },
                                { id: 1, value: 'Лютий' },
                                { id: 2, value: 'Березень' },
                                { id: 3, value: 'Квітень' },
                                { id: 4, value: 'Травень' },
                                { id: 5, value: 'Червень' },
                                { id: 6, value: 'Липень' },
                                { id: 7, value: 'Серпень' },
                                { id: 8, value: 'Вересень' },
                                { id: 9, value: 'Жовтень' },
                                { id: 10, value: 'Листопад' },
                                { id: 11, value: 'Грудень' },
                            ]}
                        />
                    </div>

                    {localStorage.getItem('err') ? <p className='data_err__message'>*Немає інформації про даний період</p> : null}
                </div>
            </div>

            {diagramState === 'line' ? <button className='btn' onClick={() => setCompare(prev => !prev)}>Порівняти</button> : null}

            {diagramState === 'line' && !compare ? <div className='line_charts charts__container'>
                <div className='chart__container'>
                    <LineChart title={'Прибутки'} finances={JSON.parse(localStorage.getItem('incomesArrLine'))}/>
                </div>
                <div className='chart__container'>
                    <LineChart title={'Витрати'} finances={JSON.parse(localStorage.getItem('costsArrLine'))}/>
                </div>
            </div> : null}

            {diagramState === 'line' && compare ? 
                <MixedLineChart 
                    incomes={JSON.parse(localStorage.getItem('incomesArrLine'))} 
                    costs={JSON.parse(localStorage.getItem('costsArrLine'))}
                /> 
            : null}

            {diagramState === 'bar' ? <div className='bar_charts charts__container'>
                <div className='chart__container'>
                    <BarChart title={'Прибутки'} financeArr={JSON.parse(localStorage.getItem('incomesArrLine'))} financeType={'incomes'} barType={'month'}/>
                </div>
                <div className='chart__container'>
                    <BarChart title={'Витрати'} financeArr={JSON.parse(localStorage.getItem('costsArrLine'))} financeType={'costs'} barType={'month'}/>
                </div>
            </div> : null}
            
            {diagramState === 'pie' ? <div className='pie_charts charts__container'>
                <div className='chart__container'>
                    <PieChart title={'Прибутки за категоріями'} financeArr={JSON.parse(localStorage.getItem('incomesArrPie'))} financeType={'incomes'}/>
                </div>
                <div className='chart__container'>
                    <PieChart title={'Витрати за категоріями'} financeArr={JSON.parse(localStorage.getItem('costsArrPie'))} financeType={'costs'}/>
                </div>
            </div> : null}

            {diagramState === 'polar' ? <div className='pie_charts charts__container'>
                <div className='chart__container'>
                    <PolarAreaChart title={'Прибутки за категоріями'} financeArr={JSON.parse(localStorage.getItem('incomesArrPie'))} financeType={'incomes'}/>
                </div>
                <div className='chart__container'>
                    <PolarAreaChart title={'Витрати за категоріями'} financeArr={JSON.parse(localStorage.getItem('costsArrPie'))} financeType={'costs'}/>
                </div>
            </div> : null}

        </div>
    );
}
  
export default CashFlowPage;