import '../../styles/components/home-page.scss'
import burgerImg from '../../img/burger_menu.png'

import LineChart from "../graphics/LineChart";
import { useState, useEffect } from "react";

import { db } from '../../index';
import PieChart from '../graphics/PieChart';

function MainPage({userData}) {
    const today = new Date() 
    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

    const dayOfWeek = days[today.getDay()]
    const dayOfMonth = today.getDate()
    const month = months[today.getMonth()]

    let textMonth = String(today.getMonth() + 1)

    if (textMonth.length < 2) {
        textMonth = '0' + textMonth
    }

    const [incomes, setIncomes] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [loansIn, setLoansIn] = useState(0)
    const [loansOut, setLoansOut] = useState(0)

    const [finances, setFinances] = useState([])
    const [incomesArr, setIncomesArr] = useState([])
    const [costsArr, setCostsArr] = useState([])

    useEffect(() => {
        db.ref('income').child(userData.id).on('value', elem => {
            let obj = elem.val()
            let arr = []
    
            for (let key in obj) {
                if (key !== '1' && obj[key].Date.split('-')[1] === textMonth) {
                    arr.push({id: key, ...obj[key]})
                }
            }

            setIncomesArr(arr)
            setIncomes(arr.reduce((prev, curr) => {
                switch (curr.Currency) {
                    case "USD":
                        return parseFloat(prev) + parseFloat(curr.Value) * 40;
                    case "EUR":
                        return parseFloat(prev) + parseFloat(curr.Value) * 40;
                    case "GBP":
                        return parseFloat(prev) + parseFloat(curr.Value) * 44;
                    case "JPY":
                        return parseFloat(prev) + parseFloat(curr.Value) * 0.3;
                    case "CNY":
                        return parseFloat(prev) + parseFloat(curr.Value) * 5.4;
                    default:
                        return parseFloat(prev) + parseFloat(curr.Value);
                }
            }, 0))
        })

        db.ref('costs').child(userData.id).on('value', elem => {
            let obj = elem.val()
            let arr = []
            
            for (let key in obj) {
                if (key !== '1' && obj[key].Date.split('-')[1] === textMonth) {
                    arr.push({id: key, ...obj[key]})
                }
            }

            setCostsArr(arr)
            setExpenses(arr.reduce((prev, curr) => {
                switch (curr.Currency) {
                    case "USD":
                        return parseFloat(prev) + parseFloat(curr.Value) * 40;
                    case "EUR":
                        return parseFloat(prev) + parseFloat(curr.Value) * 40;
                    case "GBP":
                        return parseFloat(prev) + parseFloat(curr.Value) * 44;
                    case "JPY":
                        return parseFloat(prev) + parseFloat(curr.Value) * 0.3;
                    case "CNY":
                        return parseFloat(prev) + parseFloat(curr.Value) * 5.4;
                    default:
                        return parseFloat(prev) + parseFloat(curr.Value);
                }
            }, 0))
        })

        db.ref('loans').child(userData.id).on('value', elem => {
            let obj = elem.val()
            let arrIn = []
            let arrOut = []
            
            for (let key in obj) {
                if (key !== '1') {
                    if (obj[key].Type === 'Ми винні') {
                        arrOut.push({currency: obj[key].Currency, value: obj[key].Value})
                    } else {
                        arrIn.push({currency: obj[key].Currency, value: obj[key].Value})

                    }
                }
            }

            setLoansIn(arrIn.reduce((prev, curr) => {
                switch (curr.currency) {
                    case "USD":
                        return parseFloat(prev) + parseFloat(curr.value) * 40;
                    case "EUR":
                        return parseFloat(prev) + parseFloat(curr.value) * 40;
                    case "GBP":
                        return parseFloat(prev) + parseFloat(curr.value) * 44;
                    case "JPY":
                        return parseFloat(prev) + parseFloat(curr.value) * 0.3;
                    case "CNY":
                        return parseFloat(prev) + parseFloat(curr.value) * 5.4;
                    default:
                        return parseFloat(prev) + parseFloat(curr.value);
                }
            }, 0))

            setLoansOut(arrOut.reduce((prev, curr) => {
                switch (curr.currency) {
                    case "USD":
                        return parseFloat(prev) + parseFloat(curr.value) * 40;
                    case "EUR":
                        return parseFloat(prev) + parseFloat(curr.value) * 40;
                    case "GBP":
                        return parseFloat(prev) + parseFloat(curr.value) * 44;
                    case "JPY":
                        return parseFloat(prev) + parseFloat(curr.value) * 0.3;
                    case "CNY":
                        return parseFloat(prev) + parseFloat(curr.value) * 5.4;
                    default:
                        return parseFloat(prev) + parseFloat(curr.value);
                }
            }, 0))
        })
    }, [])

    useEffect(() => {
        if (!document.querySelector('.menu_small_screen').classList.contains('hidden')) {
            document.querySelector('.menu_small_screen').classList.add('hidden')
            document.querySelector('.burger_btn_img').src = burgerImg
        }
        
    }, [])

    useEffect(() => {
        let arr = []

        incomesArr.forEach((item, index) => {
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

            arr.push({
                id: index,
                day: item.Date.split('-')[0],
                userGain: value,
                userLost: 0
            })

        });

        costsArr.forEach((item, index) => {
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

            arr.push({id: index, day: item.Date.split('-')[0], userGain: 0, userLost: value})

        })

        setFinances(arr)
    }, [incomesArr, costsArr])

    return (
        <div className="home_page page">
            <header className="home__header">
                <h2 className="today_date">{dayOfWeek}, {dayOfMonth} {month}</h2>
            </header>
            
            <main className="home__main">
                <div className="main_finance">
                    <div className='finance__container'>
                        <div>
                            <h2 className='main_finance__title'>Фінанси компанії</h2>

                            <div className='money_container'>
                                <p className='container__title'>Прибутки</p>
                                <p className='incomeValue'>{incomes} UAH</p>
                            </div>
                            <div className='money_container'>
                                <p className='container__title'>Витрати</p>
                                <p className='costValue'>{expenses} UAH</p>
                            </div>
                        </div>
                        

                        <div>
                            <h2 className='main_finance__title'>Депозити компанії</h2>

                            <div className='money_container'>
                                <p className='container__title'>Дебет</p>
                                <p className='incomeValue'>{loansIn} UAH</p>
                            </div>
                            <div className='money_container'>
                                <p className='container__title'>Кредит</p>
                                <p className='costValue'>{loansOut} UAH</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_statistic">
                    <LineChart title='Рух коштів за поточний місяць' finances={finances}/>
                    <div className='statistic__pies'>
                        <h2 style={{textAlign: 'center'}}>По категоріям</h2>
                        <div className='pies__container'>
                            <PieChart title='Прибутки' financeArr={incomesArr} financeType={'incomes'}/>
                            <PieChart title='Витрати' financeArr={costsArr} financeType={'costs'}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainPage;