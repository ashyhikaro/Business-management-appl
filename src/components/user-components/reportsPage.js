import '../../styles/components/reports-page.scss'
import '../../styles/forms/form.scss';
import 'react-datalist-input/dist/styles.css';
import DatalistInput from 'react-datalist-input';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { db } from '../..';

function ReportsPage({userData}) {
    const months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    const presentYear = String(new Date().getFullYear())

    const { register, reset, handleSubmit, formState, formState: { errors, isSubmitSuccessful } } = useForm();
    const [ yearFinance, setYearFinance ] = useState();
    const [ quarterFinance, setQuarterFinance ] = useState('');
    const [ monthFinance, setMonthFinance ] = useState('');
    const [ dateFinance, setDateFinance ] = useState('');

    const [ incomesArr, setIncomesArr] = useState([]);
    const [ costsArr, setCostsArr] = useState([]);
    const [ loansArr, setLoansArr] = useState([]);

    function checkFinances(objFinance) {
        let financeArr = []

        if (yearFinance && !quarterFinance) {
            for (let key in objFinance) {
                if (key !== '1' && objFinance[key].Date.split('-')[2] === yearFinance) {
                    financeArr.push({id: key, ...objFinance[key]})
                }
            }
        } else {
            if (yearFinance && quarterFinance && !monthFinance) {
                for (let key in objFinance) {
                    if (key !== '1' && objFinance[key].Date.split('-')[2] === yearFinance ) {
                        switch (quarterFinance) {
                            case 'Перший':
                                if (objFinance[key].Date.split('-')[1] === '01' || objFinance[key].Date.split('-')[1] === '02' || objFinance[key].Date.split('-')[1] === '03') {
                                    financeArr.push({id: key, ...objFinance[key]})
                                }
                                break;
                            case 'Другий':
                                if (objFinance[key].Date.split('-')[1] === '04' || objFinance[key].Date.split('-')[1] === '05' || objFinance[key].Date.split('-')[1] === '06') {
                                    financeArr.push({id: key, ...objFinance[key]})
                                }
                                break;
                            case 'Третій':
                                if (objFinance[key].Date.split('-')[1] === '07' || objFinance[key].Date.split('-')[1] === '08' || objFinance[key].Date.split('-')[1] === '09') {
                                    financeArr.push({id: key, ...objFinance[key]})
                                }
                                break;
                            case 'Четвертий':
                                if (objFinance[key].Date.split('-')[1] === '10' || objFinance[key].Date.split('-')[1] === '11' || objFinance[key].Date.split('-')[1] === '12') {
                                    financeArr.push({id: key, ...objFinance[key]})
                                }
                                break;
                        }
                    }
                }
            } else {
                if (yearFinance && quarterFinance && monthFinance) {
                    const monthIndex = String(months.indexOf(monthFinance)+1).length > 1 ? String(months.indexOf(monthFinance)+1) : `0${String(months.indexOf(monthFinance)+1)}`
                    for (let key in objFinance) {
                        if (key !== '1' && objFinance[key].Date.split('-')[2] === yearFinance && objFinance[key].Date.split('-')[1] ===  monthIndex) {
                            financeArr.push({id: key, ...objFinance[key]})
                        }
                    }
                }
            }
        }

        return financeArr
    }

    function findFinances(type, objFinance) {
        let financeArr = checkFinances(objFinance)

        const sumByType = financeArr.reduce((acc, cur) => {
            if (acc[cur.Type]) {
              acc[cur.Type] += parseFloat(cur.Value);
            } else {
              acc[cur.Type] = parseFloat(cur.Value);
            }
            return acc;
        }, {});

        financeArr = []

        for (const key in sumByType) {
            financeArr.push({type: key, value: sumByType[key]})
        }

        financeArr.sort((a, b) => {
            if (a.type.length > b.type.length) {
                return 1
            } else if ((a.type.length < b.type.length)) {
                return -1
            } else {
                return 0
            }
        });

        type === 'income' ? setIncomesArr(financeArr) : setCostsArr(financeArr)
    }

    function findLoans(objFinance) {
        let financeArr = checkFinances(objFinance)
        let loansPaidOut = [], loansNotPaidOut = []

        financeArr.forEach(item => {
            item.PaidOut ? loansPaidOut.push(item) : loansNotPaidOut.push(item)
        })

        const sumByType_PaidOut = loansPaidOut.reduce((acc, cur) => {
            if (acc[cur.Type]) {
              acc[cur.Type] += parseFloat(cur.Value);
            } else {
              acc[cur.Type] = parseFloat(cur.Value);
            }
            return acc;
        }, {});

        const sumByType_NotPaidOut = loansNotPaidOut.reduce((acc, cur) => {
            if (acc[cur.Type]) {
              acc[cur.Type] += parseFloat(cur.Value);
            } else {
              acc[cur.Type] = parseFloat(cur.Value);
            }
            return acc;
        }, {});

        loansPaidOut = []
        loansNotPaidOut = []

        for (const key in sumByType_PaidOut) {
            loansPaidOut.push({type: key, value: sumByType_PaidOut[key]})
        }

        for (const key in sumByType_NotPaidOut) {
            loansNotPaidOut.push({type: key, value: sumByType_NotPaidOut[key]})
        }

        let allLoansArr = [loansPaidOut.sort((a, b) => {
            if (a.type.length > b.type.length) {
                return 1
            } else if ((a.type.length < b.type.length)) {
                return -1
            } else {
                return 0
            }
        }), loansNotPaidOut.sort((a, b) => {
            if (a.type.length > b.type.length) {
                return 1
            } else if ((a.type.length < b.type.length)) {
                return -1
            } else {
                return 0
            }
        })]

        setLoansArr(allLoansArr)
    }
    
    const resetForm = () => {
        setYearFinance('')
        setQuarterFinance('')
        setMonthFinance('')
    }

    const onSubmit = (data) => {
        if (yearFinance !== '') {
            db.ref('income').child(userData.id).on('value', function(elem) {
                let incomesObj = elem.val()
                findFinances('income', incomesObj)
            });

            db.ref('costs').child(userData.id).on('value', function(elem) {
                let costsObj = elem.val()
                findFinances('costs', costsObj)
            });

            db.ref('loans').child(userData.id).on('value', function(elem) {
                let loansObj = elem.val()
                findLoans(loansObj)
            });
        } else {
            setIncomesArr([])
            setCostsArr([])
            setLoansArr([])
        }

        setDateFinance({year: yearFinance, quarter: quarterFinance, month: monthFinance})
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({year: '', quarter: '', month: '',})
        }
    }, [formState])

    return (
        <div className="reports_page page">
            <h1 className="title">Статистика</h1>

            <div className='reports_page__main'>
                <div className='reports_page__main_form'>
                    <Form onSubmit={handleSubmit(onSubmit)} className='reports_form'>
                        <Form.Field>
                            <label>Рік:</label>
                            <DatalistInput
                                value={yearFinance}
                                setValue={setYearFinance}
                                placeholder='Рік...'
                                items={[
                                    { id: '1', value: `${+presentYear - 5}` },
                                    { id: '2', value: `${+presentYear - 4}` },
                                    { id: '3', value: `${+presentYear - 3}` },
                                    { id: '4', value: `${+presentYear - 2}` },
                                    { id: '5', value: `${+presentYear - 1}` },
                                    { id: '6', value: `${+presentYear}` },
                                    { id: '7', value: `${+presentYear + 1}` },
                                    { id: '8', value: `${+presentYear + 2}` },
                                    { id: '9', value: `${+presentYear + 3}` },
                                    { id: '10', value: `${+presentYear + 4}` },
                                    { id: '11', value: `${+presentYear + 5}` },
                                ]}
                                {...register('year', {
                                    required: false
                                })}
                            />
                        </Form.Field>
                        {yearFinance ? 
                            <Form.Field>
                                <label>Квартал:</label>
                                <DatalistInput
                                    value={quarterFinance}
                                    setValue={setQuarterFinance}
                                    placeholder="Квартал..."
                                    items={[
                                        { id: '1', value: 'Перший' },
                                        { id: '2', value: 'Другий' },
                                        { id: '3', value: 'Третій' },
                                        { id: '4', value: 'Четвертий' },
                                    ]}
                                    {...register('quarter', {
                                        required: false
                                    })}
                                />
                            </Form.Field>
                            : null
                        }
                        {quarterFinance ? 
                            <Form.Field>
                                <label>Місяць:</label>
                                {quarterFinance === 'Перший' ?
                                    <DatalistInput
                                        value={monthFinance}
                                        setValue={setMonthFinance}
                                        placeholder="Місяць..."
                                        items={[
                                            { id: '1', value: 'Січень' },
                                            { id: '2', value: 'Лютий' },
                                            { id: '3', value: 'Березень' },
                                        ]}
                                        {...register('month', {
                                            required: false
                                        })}
                                    /> : quarterFinance === 'Другий' ?
                                        <DatalistInput
                                            value={monthFinance}
                                            setValue={setMonthFinance}
                                            placeholder="Місяць..."
                                            items={[
                                                { id: '1', value: 'Квітень' },
                                                { id: '2', value: 'Травень' },
                                                { id: '3', value: 'Червень' },
                                            ]}
                                            {...register('month', {
                                                required: false
                                            })}
                                        /> : quarterFinance === 'Третій' ?
                                            <DatalistInput
                                                value={monthFinance}
                                                setValue={setMonthFinance}
                                                placeholder="Місяць..."
                                                items={[
                                                    { id: '1', value: 'Липень' },
                                                    { id: '2', value: 'Серпень' },
                                                    { id: '3', value: 'Вересень' },
                                                ]}
                                                {...register('month', {
                                                    required: false
                                                })}
                                            /> : 
                                            <DatalistInput
                                                value={monthFinance}
                                                setValue={setMonthFinance}
                                                placeholder="Місяць..."
                                                items={[
                                                    { id: '1', value: 'Жовтень' },
                                                    { id: '2', value: 'Листопад' },
                                                    { id: '3', value: 'Грудень' },
                                                ]}
                                                {...register('month', {
                                                    required: false
                                                })}
                                            />
                                }
                            </Form.Field>
                            : null
                        }

                        <Form.Field className='btns_field'>
                            <Button className='non_active_btn' onClick={resetForm} type='reset'>Скинути</Button>
                            <Button className='sign-in_btn' type='submit'>Підтвердити</Button>
                        </Form.Field>
                    </Form>

                    <button className='receipt_btn btn'>Сформувати PDF-звіт</button>
                </div>
                

                {incomesArr.length > 0 || costsArr.length > 0 || loansArr.length > 0 ? 
                    <div className='reports__container'>
                        {dateFinance['year'].length > 0 && dateFinance['quarter'].length === 0  ?
                            <h3 className='reports__container_title'>Статистика за {dateFinance.year} рік</h3> :
                            dateFinance['year'].length > 0 && dateFinance['quarter'].length > 0 && dateFinance['month'].length === 0  ?
                                <h3 className='reports__container_title'>Статистика за {dateFinance.year} рік, {dateFinance.quarter} квартал</h3> :
                                <h3 className='reports__container_title'>Статистика за {dateFinance.year} рік, {dateFinance.quarter} квартал, {dateFinance.month}</h3>
                        }

                        <h4 className='reports__title'>Фінанси</h4>

                        <div className='report_finances'>
                            <div className='report_container'>
                                <div>
                                    <h5 className='report_title'>Прибутки:</h5>
                                    {incomesArr.length > 0 ? incomesArr.map((item, index) => {
                                        return <p className='report_item' key={index}>{item.type}: {item.value} ₴</p>}
                                    ) : null}
                                </div>
                                <p className='report_item good'>Разом: {incomesArr.length > 0 ? incomesArr.reduce((acc, cur) => acc + cur.value, 0) : 0} ₴</p>
                            </div>
                            <div className='report_container'>
                                <div>
                                    <h5 className='report_title'>Витрати:</h5>
                                    {costsArr.length > 0 ? costsArr.map((item, index) => {
                                        return <p className='report_item' key={index}>{item.type}: {item.value} ₴</p>}
                                    ): null}
                                </div>
                                <p className='report_item bad'>Разом: {costsArr.length > 0 ? costsArr.reduce((acc, cur) => acc + cur.value, 0): 0} ₴</p>
                            </div>
                        </div>

                        <h4 className='reports__title'>Позики</h4>

                        <div className='report_finances'>
                            <div className='report_container'>
                                <div>
                                    <h5 className='report_title'>Закриті:</h5>
                                    {loansArr.length > 0 ? loansArr[0].map((item, index) => {
                                        return <p className='report_item' key={index}>{item.type !== 'Ми винні' ? 'Отримали' : 'Віддали'}: {item.value} ₴</p>}
                                    ) : null}
                                </div>
                                <p className='report_item dif'>Різниця: {loansArr[0].length > 0 || loansArr[1].length > 0  ? (loansArr[0][0].value && loansArr[0][1].value) ? loansArr[0][1].value - loansArr[0][0].value : (loansArr[0][0].value && !loansArr[0][1].value) ? loansArr[0][0].value : loansArr[0][1].value : 0} ₴</p>
                            </div>
                            <div className='report_container'>
                                <div>
                                    <h5 className='report_title'>Відкриті:</h5>
                                    {loansArr.length > 0 ? loansArr[1].map((item, index) => {
                                        return <p className='report_item' key={index}>{item.type}: {item.value} ₴</p>}
                                    ) : null}
                                </div>
                                <p className='report_item dif'>Різниця: {loansArr[0].length > 0 || loansArr[1].length > 0  ? (loansArr[1][0].value && loansArr[1][1].value) ? loansArr[1][1].value - loansArr[1][0].value : (loansArr[1][0].value && !loansArr[1][1].value) ? loansArr[1][0].value : loansArr[1][1].value : 0} ₴</p>
                            </div>
                        </div>
                    </div>
                : null}
            </div>
            
        </div>
    );
}
  
export default ReportsPage;