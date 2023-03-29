import '../../styles/components/loan-page.scss'
import '../../styles/pagination.scss'
import CyrillicFont from '../../fonts/FreeSans.ttf'

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

import DatalistInput from 'react-datalist-input';
import { useEffect, useState, lazy } from "react";
import ReactPaginate from 'react-paginate';

import { db } from '../../index';

const LoanForm = lazy(() => import('./forms/loanForm'))

function SortPanelLoans({finalSort, setSortRegime, userData, category, setCategory, nameOfParty, setNameOfParty, currency, setCurrency, setLoans, paidOutStatus, setPaidOutStatus}) {

    let sortedArr = []

    db.ref('loans').child(userData.id).on('value', elem => {
        let obj = elem.val()

        for (let key in obj) {
            if (key !== '1') {
                sortedArr.push({id: key, ...obj[key]})
            }
        }

        sortedArr = finalSort(sortedArr)
    })

    useEffect(() => {
        if (category) {
            sortedArr = sortedArr.filter(item => item.Type === category)
        }

        if (nameOfParty) {
            sortedArr = sortedArr.filter(item => item.Name.trim().toLowerCase().includes(nameOfParty.trim().toLowerCase()))
        }

        if (currency) {
            sortedArr = sortedArr.filter(item => item.Currency === currency)
        }

        if (paidOutStatus) {
            if (paidOutStatus === 'Сплачено') {
                sortedArr = sortedArr.filter(item => item.PaidOut === true)
            } else {
                sortedArr = sortedArr.filter(item => item.PaidOut === false)
            }
        }

        setLoans(sortedArr)

    }, [category, nameOfParty, currency, paidOutStatus])

    function sortFinance(param, direction) {
        return [...sortedArr].sort(function(a, b) {
            if (param === 'sum') {
                let value1 = 0
                let value2 = 0

                let aType = a.Currency
                let bType = b.Currency

                switch (aType) {
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
    
                switch (bType) {
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
        if (nameOfParty) {
            sortedArr = sortedArr.filter(item => item.Name.trim().toLowerCase().includes(nameOfParty))
        }

        if (category) {
            sortedArr = sortedArr.filter(item => item.Type === category)
        }

        setLoans(sortFinance(param, direction))
    }

    function resetFilter() {
        setSortRegime('')
        setNameOfParty('')
        setCategory('')
        setCurrency('')
        setPaidOutStatus('')

        document.querySelector('.project_input').value = ''
    }

    return (
        <div className='sort_panel'>
            <h2>Сортування</h2>

            <div className='sort__date sort_con_flex'>
                <h4 className='sort__date_title'>Дата:</h4>
                <div className='sort_btns'>
                    <button onClick={() => handleSortFinance('date', 'top')}>По зростанню&nbsp;<span>&#129041;</span></button>
                    <button onClick={() => handleSortFinance('date', 'bottom')}>По спаданню&nbsp;<span>&#129043;</span></button>
                </div>
            </div>

            <div className='sort__sum sort_con_flex'>
                <h4 className='sort__sum_title'>Сума:</h4>
                <div className='sort_btns'>
                    <button onClick={() => handleSortFinance('sum', 'top')}>По зростанню&nbsp;<span>&#129041;</span></button>
                    <button onClick={() => handleSortFinance('sum', 'bottom')}>По спаданню&nbsp;<span>&#129043;</span></button>
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
                <h4>Вид позики: </h4>
                <DatalistInput
                    value={category}
                    setValue={setCategory}
                    placeholder="Ми винні"
                    items={[
                        {id: 'In', value: 'Ми винні'},
                        {id: 'Out', value: 'Нам винні'},
                    ]}
                />
            </div>
            <div className='sort__category'>
                <h4>Статус: </h4>
                <DatalistInput
                    value={paidOutStatus}
                    setValue={setPaidOutStatus}
                    placeholder="Ми винні"
                    items={[
                        {id: 'True', value: 'Сплачено'},
                        {id: 'False', value: 'Не сплачено'},
                    ]}
                />
            </div>

            <div className='sort__project'>
                <h4>Ім'я \ компанія: </h4>
                <div className='sort__project_search'>
                    <input type="text" className='project_input' placeholder='Проєкт...'/>
                    <button onClick={() => setNameOfParty(document.querySelector('.project_input').value)}>Пошук</button>
                </div>
            </div>

            <div className='reset_btn__container'>
                <button onClick={resetFilter} className='reset_btn'>Скинути фільтри</button>
            </div>
        </div>
    )
}

function LoanPage({userData}) {
    const [loans, setLoans] = useState([])
    const [mode, setMode] = useState('create')
    const [usersNoteId, setUsersNoteId] = useState()

    const [sortRegime, setSortRegime] = useState('')
    const [category, setCategory] = useState('');
    const [nameOfParty, setNameOfParty] = useState('');
    const [currency, setCurrency] = useState('');
    const [paidOutStatus, setPaidOutStatus] = useState('');

    const [itemOffset, setItemOffset] = useState(0);
    let endOffset = itemOffset + 10
    let pageCount =  loans ? Math.ceil(loans.length / 10) : null
    let currentItems = loans ? loans.slice(itemOffset, endOffset) : null

    function openForm(backTriger) {
        document.querySelector('.sort_panel').classList.toggle('sort_panel_non_active')

        if (mode === 'edit' && !document.querySelector('form').classList.contains('form_hiden')) {
            setMode('create')
            document.querySelector('form').classList.add('form_hiden')
            document.querySelector('.sort_panel').classList.add('sort_panel_non_active')
        }

        if (backTriger === 'back') {
            document.querySelector('form').classList.add('form_hiden')
            document.querySelector('.sort_panel').classList.remove('sort_panel_non_active')
        } else {
            document.querySelector('form').classList.toggle('form_hiden')
        }
        
    }

    function editOpenForm(event) {
        setMode('edit')

        if (mode === 'create' && document.querySelector('.finance__form').classList.contains('form_hiden')) {
            openForm()
        }
        
        setUsersNoteId(event.target.getAttribute('itemID').toString())
    }

    const handlePageClick = (event) => {
        let newOffset
        newOffset = (event.selected * 10) % loans.length;
        setItemOffset(newOffset);
    };

    function sumDateSort(arr, param, direction) {
        return [...arr].sort(function(a, b) {
            if (param === 'sum') {
                let value1 = 0
                let value2 = 0

                let aType = a.Currency
                let bType = b.Currency

                switch (aType) {
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
    
                switch (bType) {
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

        if (nameOfParty) {
            sortedArr2 = sortedArr2.filter(item => item.Name.trim().toLowerCase().includes(nameOfParty.trim().toLowerCase()))
        }

        if (currency) {
            sortedArr2 = sortedArr2.filter(item => item.Currency === currency)
        }

        if (paidOutStatus) {
            if (paidOutStatus === 'Сплачено') {
                sortedArr2 = sortedArr2.filter(item => item.PaidOut === true)
            } else {
                sortedArr2 = sortedArr2.filter(item => item.PaidOut === false)
            }
        }

        return sortedArr2
    }

    function deleteItem(event) {
        const userId = event.target.id
        const itemId = event.target.getAttribute('itemID').toString()
        db.ref("loans").child(userId).child(itemId).remove()

        if (currentItems.length === 1) {
            setItemOffset(0);
        }

        let sortedArr = []

        db.ref("loans").child(userData.id).on('value', elem => {
            let obj = elem.val()

            for (let key in obj) {
                if (key !== '1') {
                    sortedArr.push({id: key, ...obj[key]})
                }
            }
        })

        sortedArr = finalSort(sortedArr)

        setLoans(sortedArr)
    }

    function updateStatus(event) {
        const userId = event.target.id
        const itemId = event.target.getAttribute('itemID').toString()

        if (event.target.innerHTML === 'Відкрити') {
            db.ref("loans").child(userId).child(itemId).update({PaidOut: false})
        } else {
            db.ref("loans").child(userId).child(itemId).update({PaidOut: true})
        }

        let sortedArr = []

        db.ref("loans").child(userData.id).on('value', elem => {
            let obj = elem.val()

            for (let key in obj) {
                if (key !== '1') {
                    sortedArr.push({id: key, ...obj[key]})
                }
            }
        })

        sortedArr = finalSort(sortedArr)

        setLoans(sortedArr)
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

        db.ref('loans').child(id).child(itemId).once('value', (elem) => {
            element = elem.val()    
        })
    
        const doc = new jsPDF('landscape', 'pt', 'a4')
        doc.addFont(CyrillicFont, 'CyrillicFont', 'normal');

        doc.setFont('CyrillicFont')
        doc.setFontSize(26);
        doc.text(40, 50, 'Звіт про позику')

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
            head: [['Дата запису', "Ім'я / компанія", 'Тип позики', 'Сума', 'Дата виплати', 'Статус']],
            body: [
              [element.DateOfCreation, element.Name, element.Type, `${element.Value + ' ' + element.Currency}`, element.Date, `${element.PaidOut ? 'Закрита' : 'Відкрита'}`],
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

        doc.save('Loan_report')
    }

    useEffect(() => {
        db.ref('loans').child(userData.id).on('value', elem => {
            let obj = elem.val()
            let arr = []
    
            for (let key in obj) {
                if (key !== '1') {
                    arr.push({id: key, ...obj[key]})
                }
            }

            setLoans(arr)
        })

        setItemOffset(0)
    }, [])

    useEffect(() => {
        if (!sortRegime) {
            db.ref("loans").child(userData.id).on('value', elem => {
                let obj = elem.val()
                let arr = []
        
                for (let key in obj) {
                    if (key !== '1') {
                        arr.push({id: key, ...obj[key]})
                    }
                }
                setLoans(arr)
            })
        }
    }, [sortRegime])

    return (
        <div className="loan_page page">
            <div className='loan_page__header'>
                <h1 className="loan_page__title title">Позика</h1>
                <button className='add_loan_btn'onClick={openForm}>&#10011;</button>
            </div>

            <div className="finance_main">
                <LoanForm openForm={openForm} userData={userData} mode={mode} usersNoteId={usersNoteId}/>

                <div className='finance_table_container'>
                    <div className='table'>

                        <div className="table_titles">
                            <p className="table_title">Ім'я / компанія</p>
                            <p className="table_title">Ми винні</p>
                            <p className="table_title">Нам винні</p>
                            <p className="table_title">Дата оплати</p>
                            <p className="table_title">Панель управління</p>
                        </div>

                        <div className='table_rows'>
                            {currentItems.map((loan, index) => 
                                <div className="table_row" key={index}>

                                    <div className='item_name table_col'>
                                        {loan.PaidOut ? 
                                            <p className='break_text name loan_paid_out'>{loan.Name}</p> :
                                            <p className='break_text name'>{loan.Name}</p>
                                        }
                                        <p className='date_of_creation'>{loan.DateOfCreation}</p>
                                    </div>

                                    <div className='item_value table_col'>
                                        {loan.PaidOut ? 
                                            <p className='break_text value costValue loan_paid_out'>{loan.Type === 'Ми винні' ? loan.Value : ''}</p> :
                                            <p className='break_text value costValue'>{loan.Type === 'Ми винні' ? loan.Value : ''}</p> 
                                        }
                                        <p className='value_currency'>{loan.Type === 'Ми винні' ? loan.Currency : ''}</p>
                                    </div>

                                    <div className='item_value table_col'>
                                        {loan.PaidOut ? 
                                            <p className='break_text value incomeValue loan_paid_out'>{loan.Type === 'Нам винні' ? loan.Value : ''}</p> :
                                            <p className='break_text value incomeValue'>{loan.Type === 'Нам винні' ? loan.Value : ''}</p>
                                        }
                                        <p className='value_currency'>{loan.Type === 'Нам винні' ? loan.Currency : ''}</p>
                                    </div>

                                    <div className='item_date table_col'>
                                        {loan.PaidOut ? <p className='date loan_paid_out'>{loan.Date}</p> : <p className='date'>{loan.Date}</p>}
                                    </div> 

                                    <div className='item_panel table_col'>
                                        <div className='btns_container'>
                                            {loan.PaidOut ? 
                                                <button className='receipt_btn btn' onClick={updateStatus} id={userData.id} itemID={loan.id}>Відкрити</button> :
                                                <button className='receipt_btn btn' onClick={updateStatus} id={userData.id} itemID={loan.id}>Закрити</button>
                                            }
                                            <br />
                                            <button 
                                                className='edit_btn btn' 
                                                onClick={editOpenForm} 
                                                id={userData.id}
                                                itemID={loan.id}
                                            >
                                                Редагувати
                                            </button>
                                        </div>

                                        <div className='btns_container'>
                                            <button 
                                                className='receipt_btn btn' 
                                                onClick={(e) => generatePDF(e.target)} 
                                                id={userData.id} 
                                                itemID={loan.id}
                                            >
                                                PDF-звіт
                                            </button>
                                            <br />
                                            <button 
                                                className='delete_btn btn' 
                                                onClick={deleteItem} 
                                                id={userData.id} 
                                                itemID={loan.id}
                                            >
                                                Видалити
                                            </button>
                                        </div>
                                    </div>

                                </div>)
                            }
                        </div>
                    </div>
                    
                    {(currentItems.length === 0 || loans.length <= 10) ? null : 
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

                <SortPanelLoans 
                    finalSort={finalSort}
                    setSortRegime={setSortRegime}
                    userData={userData}
                    category={category}
                    setCategory={setCategory}
                    nameOfParty={nameOfParty}
                    setNameOfParty={setNameOfParty}
                    currency={currency}
                    setCurrency={setCurrency}
                    setLoans={setLoans}
                    loans={loans}
                    paidOutStatus={paidOutStatus}
                    setPaidOutStatus={setPaidOutStatus}
                />
            </div>
        </div>
    );
}
  
export default LoanPage;