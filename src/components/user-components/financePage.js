import '../../styles/components/finance-page.scss'
import '../../styles/pagination.scss'
import CyrillicFont from '../../fonts/FreeSans.ttf'
import burgerImg from '../../img/burger_menu.png'

import { useEffect, useState, lazy } from "react";
import ReactPaginate from 'react-paginate';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

import { db } from '../../index';

const FinanceForm = lazy(() => import('./forms/financeForm'))
const SortPanelFinance = lazy(() => import('./forms/sortPanelFinance'))

function Items({currentItems, regime, userData, openForm, handlePageClick, pageCount, deleteItem, incomes, costs, setIncomes, setCosts, finalSort, setSortRegime, category, setCategory, projectName, setProjectName, currency, setCurrency, mode, setMode, usersNoteId, setUsersNoteId}) {
    function editOpenForm(event) {
        setMode('edit')

        if (mode === 'create' && document.querySelector('.finance__form').classList.contains('form_hiden')) {
            openForm()
        }

        setUsersNoteId(event.target.getAttribute('itemID').toString())
    }

    const generatePDF = (target) => {
        const id = target.id
        const itemId = target.getAttribute('itemID')

        const today = new Date()
        const thisDay = {
            day: String(today.getDay()).length > 1 ? String(today.getDay()) : '0'+String(today.getDay()),
            month: String(today.getMonth()).length > 1 ? String(today.getMonth()) : '0'+String(today.getMonth()),
            year: String(today.getFullYear()),
        }
        
        let element

        db.ref(regime).child(id).child(itemId).once('value', (elem) => {
            element = elem.val()    
        })
    
        const doc = new jsPDF('landscape', 'pt', 'a4')
        doc.addFont(CyrillicFont, 'CyrillicFont', 'normal');

        doc.setFont('CyrillicFont')
        doc.setFontSize(26);
        regime === 'income' ? doc.text(40, 50, 'Звіт про отримання прибутку') : doc.text(40, 50, 'Звіт про витрати')

        const tableFont = 'CyrillicFont';
        const tableFontSize = 14;
        const tableFontSizeVal = 12;

        const headStyles = {
            font: tableFont,
            fontSize: tableFontSize,
        };
        const bodyStyles = {
            font: tableFont,
            fontSize: tableFontSizeVal,
        };

        doc.autoTable({
            head: [['Дата запису', 'Дата транзакції', 'Проєкт', 'Категорія', 'Сума']],
            body: [
              [element.DateOfCreation, element.Date, element.Project, element.Type, `${element.Value + ' ' + element.Currency}`],
            ],
            startY: 80,
            headStyles,
            bodyStyles,
        })

        doc.setFont('CyrillicFont')
        doc.setFontSize(14);
        doc.text(40, 200, 'Дата:')

        doc.setFont('helvetica', 'italic')
        doc.text(80, 200, `${thisDay.day+'-'+thisDay.month+'-'+thisDay.year}`)

        regime === 'income' ? doc.save('Income_report') : doc.save('Expense_report')
    }
    
    return (
        <div className="finance_main">
            <FinanceForm regime={regime} userData={userData} openForm={openForm} mode={mode} usersNoteId={usersNoteId}></FinanceForm>

            <div className='finance_table_container'>
                <div className='table'>
                    <div className="table_titles">
                        <p className="table_title">Дата</p>
                        <p className="table_title">Сума</p>
                        <p className="table_title">Категорія</p>
                        <p className="table_title">Проєкт</p>
                        <p className="table_title">Панель керування</p>
                    </div>
                    <div className='table_rows'>
                        {currentItems.map((income, index) => 
                            <div className="table_row" key={index}>

                                <div className='item_date table_col'>
                                    <p className='date'>{income.Date}</p>
                                    <p className='date_of_creation'>{income.DateOfCreation}</p>
                                </div> 

                                <div className='item_value table_col'>
                                    {regime === 'income' ? 
                                        <p className='break_text value incomeValue'>+ {income.Value}</p>
                                    :
                                        <p className='break_text value costValue'>- {income.Value}</p>
                                    }
                                    
                                    <p className='value_currency'>{income.Currency}</p>
                                </div>

                                <div className='item_type table_col'>
                                    <p className='type'>{income.Type}</p>
                                </div>

                                <div className='item_project table_col'>
                                    <p className='break_text project'>{income.Project}</p>
                                </div>

                                <div className='item_panel table_col'>
                                    <button 
                                        className='receipt_btn btn'
                                        onClick={(e)=>generatePDF(e.target)} 
                                        id={userData.id}
                                        itemID={income.id}
                                    >
                                        PDF-звіт
                                    </button>
                                    <br />
                                    <button 
                                        className='edit_btn btn' 
                                        onClick={editOpenForm} 
                                        id={userData.id}
                                        itemID={income.id}
                                    >
                                        Редагувати
                                    </button>
                                    <br />
                                    <button 
                                        className='delete_btn btn' 
                                        onClick={deleteItem} 
                                        id={userData.id} 
                                        itemID={income.id}
                                    >
                                        Видалити
                                    </button>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
                
                {(regime === 'income' && (currentItems.length === 0 || incomes.length <= 10)) 
                    || (regime === 'costs' && (currentItems.length === 0 || costs.length <= 10)) ? null : 
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Далі >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< Назад"
                            renderOnZeroPageCount={null}
                            className='pagination_list'
                        />
                }
            </div>

            <SortPanelFinance 
                regime={regime} 
                incomes={incomes} 
                costs={costs} 
                setIncomes={setIncomes} 
                setCosts={setCosts}
                finalSort={finalSort}
                setSortRegime={setSortRegime}
                userData={userData}
                category={category}
                setCategory={setCategory}
                projectName={projectName}
                setProjectName={setProjectName}
                currency={currency}
                setCurrency={setCurrency}
            />
            
        </div>
    );
}

function FinancePage({userData, amountOfIncome, setAmountOfIncome, amountOfExpenses, setAmountOfExpenses}) {
    const [regime, setRegime] = useState('income')
    const [mode, setMode] = useState('create')
    const [incomes, setIncomes] = useState([])
    const [costs, setCosts] = useState([])

    const [usersNoteId, setUsersNoteId] = useState()

    const [sortRegime, setSortRegime] = useState('')
    const [category, setCategory] = useState('');
    const [projectName, setProjectName] = useState('');
    const [currency, setCurrency] = useState('');

    const [itemOffset, setItemOffset] = useState(0);
    let endOffset = itemOffset + 10
    let pageCount = regime === 'income' ? Math.ceil(incomes.length / 10) : Math.ceil(costs.length / 10)
    let currentItems = regime === 'income' ? incomes.slice(itemOffset, endOffset) : costs.slice(itemOffset, endOffset)

    useEffect(() => {
        db.ref(regime).child(userData.id).on('value', elem => {
            let obj = elem.val()
            let arr = []
    
            if (regime === 'income') {
                for (let key in obj) {
                    if (key !== '1') {
                        arr.push({id: key, ...obj[key]})
                    }
                }
                setIncomes(arr)
                setAmountOfIncome(arr.reduce((prev, curr) => {
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
            } else {
                for (let key in obj) {
                    if (key !== '1') {
                        arr.push({id: key, ...obj[key]})
                    }
                }
                setCosts(arr)
                setAmountOfExpenses(arr.reduce((prev, curr) => {
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
            }
        })

        setItemOffset(0)
    }, [regime])

    useEffect(() => {
        if (!sortRegime) {
            db.ref(regime).child(userData.id).on('value', elem => {
                let obj = elem.val()
                let arr = []
        
                if (regime === 'income') {
                    for (let key in obj) {
                        if (key !== '1') {
                            arr.push({id: key, ...obj[key]})
                        }
                    }
                    setIncomes(arr)
                } else {
                    for (let key in obj) {
                        if (key !== '1') {
                            arr.push({id: key, ...obj[key]})
                        }
                    }
                    setCosts(arr)
                }
            })
        }
    }, [sortRegime])

    const handlePageClick = (event) => {
        let newOffset

        if (regime === 'income') {
            newOffset = (event.selected * 10) % incomes.length;
        } else {
            newOffset = (event.selected * 10) % costs.length;
        }
        
        setItemOffset(newOffset);
    };

    const handleChangeRegime = (event) => {
        setMode('create')

        if(!document.querySelector('.finance__form').classList.contains('form_hiden')) {
            openForm()
        }

        if (regime === 'income' && event.target.innerHTML !== 'Доходи') {
            setRegime('costs')
        }  else {
            if (regime === 'income' && event.target.innerHTML === 'Доходи') {
                return
            } else {
                if (regime === 'costs' && event.target.innerHTML !== 'Витрати') {
                    setRegime('income')
                } else {
                    return
                }
            }
        } 

        document.querySelectorAll('.finance_header__title').forEach(item => item.classList.remove('active'))
        event.target.classList.toggle('active')
    }

    function openForm(backTriger) {
        document.querySelector('.sort_panel_finances').classList.toggle('sort_panel_non_active')

        if (mode === 'edit' && !document.querySelector('form').classList.contains('form_hiden')) {
            setMode('create')
            document.querySelector('form').classList.add('form_hiden')
            document.querySelector('.sort_panel_finances').classList.add('sort_panel_non_active')
        }

        if (backTriger === 'back') {
            document.querySelector('form').classList.add('form_hiden')
            document.querySelector('.sort_panel_finances').classList.remove('sort_panel_non_active')
        } else {
            document.querySelector('form').classList.toggle('form_hiden')
        }
    }

    function sumDateSort(arr, param, direction) {
        return [...arr].sort(function(a, b) {
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

    function finalSort(sortedArr) {
        let sortedArr2 = [...sortedArr]

        if (sortRegime) {
            if (sortRegime.split('/')[0] === 'sum') {
                if (sortRegime.split('/')[1] === 'top') {
                    sortedArr2 = sumDateSort(sortedArr, 'sum', 'top')
                } else {
                    sortedArr2 = sumDateSort(sortedArr, 'sum', 'bottom')

                }
            } else {
                if (sortRegime.split('/')[0] === 'date') {
                    if (sortRegime.split('/')[1] === 'top') {
                        sortedArr2 = sumDateSort(sortedArr, 'date', 'top')
                    } else {
                        sortedArr2 = sumDateSort(sortedArr, 'date', 'bottom')
                    }
                }
            }
        }

        if (category) {
            sortedArr2 = sortedArr2.filter(item => item.Type === category)
        }

        if (projectName) {
            sortedArr2 = sortedArr2.filter(item => item.Project.trim().toLowerCase().includes(projectName.trim().toLowerCase()))
        }

        if (currency) {
            sortedArr2 = sortedArr2.filter(item => item.Currency === currency)
        }

        return sortedArr2
    }

    function deleteItem(event) {
        const userId = event.target.id
        const itemId = event.target.getAttribute('itemID').toString()
        db.ref(regime).child(userId).child(itemId).remove()

        if (currentItems.length === 1) {
            setItemOffset(0);
        }

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
        })

        sortedArr = finalSort(sortedArr)

        regime === 'income' ? setIncomes(sortedArr) : setCosts(sortedArr)
    }

    useEffect(() => {
        if (!document.querySelector('.menu_small_screen').classList.contains('hidden')) {
            document.querySelector('.menu_small_screen').classList.add('hidden')
            document.querySelector('.burger_btn_img').src = burgerImg
        }
        
    }, [])

    return (
        <div className="finance_page page">
            <h2 className='finance_page__title title'>Фінанси</h2>

            <div className="finance_header">
                <div className='header_switcher'>
                    <h3 onClick={handleChangeRegime} className='finance_header__title active'>Доходи</h3>
                    <h3 onClick={handleChangeRegime} className='finance_header__title'>Витрати</h3>

                    <button onClick={openForm} className='add_finance_btn'>	&#10011;</button>
                </div>

                <div className='header_amounts'>
                    {regime === 'income' ?
                        <p className='amount_of_income'>Доходи: {amountOfIncome} UAH</p> :
                        <p className='amount_of_income'>Витрати: {amountOfExpenses} UAH</p>
                    }
                </div>
            </div>

            <Items 
                currentItems={currentItems}
                regime={regime} 
                userData={userData} 
                openForm={openForm}
                handlePageClick={handlePageClick}
                pageCount={pageCount}
                deleteItem={deleteItem}
                incomes={incomes}
                costs={costs}
                setIncomes={setIncomes}
                setCosts={setCosts}
                finalSort={finalSort}
                setSortRegime={setSortRegime}
                category={category}
                setCategory={setCategory}
                projectName={projectName}
                setProjectName={setProjectName}
                currency={currency}
                setCurrency={setCurrency}
                mode={mode}
                setMode={setMode}
                usersNoteId={usersNoteId}
                setUsersNoteId={setUsersNoteId}
            />
        </div>
    );
}
  
export default FinancePage;