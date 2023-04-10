import '../../../styles/components/finance-page.scss'

import DatalistInput from 'react-datalist-input';
import { useEffect } from "react";

import { db } from '../../..';

function SortPanelFinance({
    regime, setIncomes, setCosts, finalSort, 
    setSortRegime, userData, category, setCategory, 
    projectName, setProjectName, currency, setCurrency }) {

    let sortedArr = []

    db.ref(regime).child(userData.id).on('value', elem => {
        let obj = elem.val()

        if (regime === 'income') {
            for (let key in obj) {
                if (key !== '1') {
                    sortedArr.push({id: key, ...obj[key]})
                }
            }
        } else {
            for (let key in obj) {
                if (key !== '1') {
                    sortedArr.push({id: key, ...obj[key]})
                }
            }
        }

        sortedArr = finalSort(sortedArr)
    })

    useEffect(() => {
        if (category) {
            sortedArr = sortedArr.filter(item => item.Type === category)
        }

        if (projectName) {
            sortedArr = sortedArr.filter(item => item.Project.trim().toLowerCase().includes(projectName.trim().toLowerCase()))
        }

        if (currency) {
            sortedArr = sortedArr.filter(item => item.Currency === currency)
        }

        regime === 'income' ? setIncomes(sortedArr) : setCosts(sortedArr)
    }, [category, projectName, currency])

    function sortFinance(param, direction) {
        sortedArr.sort(function(a, b) {
            if (param === 'sum') {
                let value1 = 0
                let value2 = 0

                switch (a.Currency) {
                    case "USD":
                        value1 = parseFloat(a.Value) * 40;
                        break;
                    case "EUR":
                        value1 = parseFloat(a.Value) * 40;
                        break;
                    case "GBP":
                        value1 = parseFloat(a.Value) * 44;
                        break;
                    case "JPY":
                        value1 = parseFloat(a.Value) * 0.3;
                        break;
                    case "CNY":
                        value1 = parseFloat(a.Value) * 5.4;
                        break;
                    default:
                        value1 = parseFloat(a.Value);
                }
    
                switch (b.Currency) {
                    case "USD":
                        value2 = parseFloat(b.Value) * 40;
                        break;
                    case "EUR":
                        value2 = parseFloat(b.Value) * 40;
                        break;
                    case "GBP":
                        value2 = parseFloat(b.Value) * 44;
                        break;
                    case "JPY":
                        value2 = parseFloat(b.Value) * 0.3;
                        break;
                    case "CNY":
                        value2 = parseFloat(b.Value) * 5.4;
                        break;
                    default:
                        value2 = parseFloat(b.Value);
                }

                if (direction === 'top') {
                    setSortRegime('sum/top')
                    if (value1 > value2) {
                        return 1
                    } else {
                        if (value1 < value2) {
                            return -1
                        } else {
                            return 0
                        }
                    }
                }
                else {
                    setSortRegime('sum/bottom')
                    if (value1 < value2) {
                        return 1
                    } else {
                        if (value1 > value2) {
                            return -1
                        } else {
                            return 0
                        }
                    }
                }
            } else {
                if (param === 'date') {
                    let date1 = +a.Date.split('-').reverse().join('')
                    let date2 = +b.Date.split('-').reverse().join('')

                    if (direction === 'top') {
                        setSortRegime('date/top')
                        if (date1 > date2) {
                            return 1
                        } else {
                            if (date1 < date2) {
                                return -1
                            } else {
                                return 0
                            }
                        }
                    } else {
                        setSortRegime('date/bottom')
                        if (date1 < date2) {
                            return 1
                        } else {
                            if (date1 > date2) {
                                return -1
                            } else {
                                return 0
                            }
                        }
                    }
                }
            }
        }) 
    }

    function handleSortFinance(param, direction) {
        if (projectName) {
            sortedArr = sortedArr.filter(item => item.Project.trim().toLowerCase().includes(projectName))
        }

        if (category) {
            sortedArr = sortedArr.filter(item => item.Type === category)
        }

        sortFinance(param, direction)

        regime === 'income' ? setIncomes(sortedArr) : setCosts(sortedArr)
    }

    function resetFilter() {
        setSortRegime('')
        setProjectName('')
        setCategory('')
        setCurrency('')

        document.querySelector('.project_input').value = ''
    }

    return (
        <div className='sort_panel_finances'>
            <h2>Сортування</h2>

            <div className='sort__date sort_con_flex'>
                <h4 className='sort__date_title'>Дата:</h4>
                <div className='sort_btns'>
                    <button onClick={() => handleSortFinance('date', 'top')}>Зростання&nbsp;<span>&#129041;</span></button>
                    <button onClick={() => handleSortFinance('date', 'bottom')}>Спадання&nbsp;<span>&#129043;</span></button>
                </div>
            </div>

            <div className='sort__sum sort_con_flex'>
                <h4 className='sort__sum_title'>Сума:</h4>
                <div className='sort_btns'>
                    <button onClick={() => handleSortFinance('sum', 'top')}>Зростання&nbsp;<span>&#129041;</span></button>
                    <button onClick={() => handleSortFinance('sum', 'bottom')}>Спадання&nbsp;<span>&#129043;</span></button>
                </div>
            </div>

            <div className='sort__currency'>
                <h4>Валюта: </h4>
                <DatalistInput
                    value={currency}
                    setValue={setCurrency}
                    placeholder="UAH"
                    items={[
                        { id: 'UAH', value: 'UAH' },
                        { id: 'USD', value: 'USD' },
                        { id: 'EUR', value: 'EUR' },
                        { id: 'GBP', value: 'GBP' },
                        { id: 'JPY', value: 'JPY' },
                        { id: 'CNY', value: 'CNY' },
                    ]}
                />
            </div>

            <div className='sort__category'>
                <h4>Категорія: </h4>
                {regime === 'income' ? 
                    <DatalistInput
                        value={category}
                        setValue={setCategory}
                        placeholder="За товар / послугу"
                        items={[
                            {id: 'Payment', value: 'За товар / послугу'},
                            {id: 'Prepayment', value: 'Передоплата'},
                            {id: 'Another', value: 'Інші надходження'},
                        ]}
                    /> :
                    <DatalistInput
                        value={category}
                        setValue={setCategory}
                        placeholder="Телефон / інтернет"
                        items={[
                            {id: 'Connection', value: 'Телефон / інтернет'},
                            {id: 'Suppliers', value: 'Оплата постачальникам'},
                            {id: 'Rent', value: 'Оренда'},
                            {id: 'Taxes', value: 'Податки'},
                            {id: 'Salary', value: 'Заробітна плата'},
                            {id: 'Another payments', value: 'Інші виплати'},
                        ]}
                    />
                }
            </div>

            <div className='sort__project'>
                <h4>Проєкт: </h4>
                <div className='sort__project_search'>
                    <input type="text" className='project_input' placeholder='Проєкт...'/>
                    <button onClick={() => setProjectName(document.querySelector('.project_input').value)}>Пошук</button>
                </div>
            </div>

            <div className='reset_btn__container'>
                <button onClick={resetFilter} className='reset_btn'>Скинути фільтри</button>
            </div>
        </div>
    )
}

export default SortPanelFinance;