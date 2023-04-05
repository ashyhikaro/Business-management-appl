import 'react-datalist-input/dist/styles.css';
import '../../../styles/forms/form.scss';
import '../../../styles/forms/finance-form.scss';

import { useEffect } from 'react';
import DatalistInput, { useComboboxControls } from 'react-datalist-input';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useState } from 'react';

import { db } from "../../../index";

function LoanForm({userData, openForm, mode, usersNoteId}) {
    const { register, reset, handleSubmit, formState, formState: { errors, isSubmitSuccessful } } = useForm();
    const { setValue, value } = useComboboxControls();
    const [currency, setCurrency] = useState('')

    const now = new Date()
    const month = now.getMonth() + 1
    const day = now.getDate()

    const dateObj = {
        day: String(day).length === 1 ? `0${day}` : day,
        month: String(month).length === 1 ? `0${month}` : month,
        year: now.getFullYear(),
    }

    let oldNote
    
    if (mode === 'edit') {
        db.ref('loans').child(userData.id).child(usersNoteId).once('value', function(elem) {
            oldNote = elem.val()
        });
    }

    const onSubmit = (data) => {
        const dateOfTrans = data.date.split('-')

        let newDBObject = {
            ...data,
            id: `${Date.now()}`, 
            date: `${dateOfTrans[2]}-${dateOfTrans[1]}-${dateOfTrans[0]}`
        }

        if (mode === 'create') {
            if (!value) {
                newDBObject = {
                    ...newDBObject,
                    value: 'Дебет',
                }
            } else {
                newDBObject = {
                    ...newDBObject, 
                    value,
                }
            }
        } else {
            newDBObject = {
                ...newDBObject, 
                value,
            }
        }

        if (mode === 'create') {
            currency === '' ? newDBObject = {...newDBObject, curr: 'UAH',} : newDBObject = {...newDBObject, curr: currency,}
        } else {
            newDBObject = {...newDBObject, curr: currency,}
        }

        const now = new Date()
        const month = now.getMonth() + 1
        const day = now.getDate()

        const nowObj = {
            day: String(day).length === 1 ? `0${day}` : day,
            month: String(month).length === 1 ? `0${month}` : month,
            year: now.getFullYear(),
        }

        if (mode === 'create') {
            db.ref('loans').child(userData.id).update({
                [newDBObject.id] : {
                    DateOfCreation: `${nowObj.day}-${nowObj.month}-${nowObj.year}`,
                    DateOfDBInput: now,
                    Date: newDBObject.date,
                    Value: newDBObject.sum,
                    Currency: newDBObject.curr,
                    Type: newDBObject.value,
                    Name: newDBObject.name ? newDBObject.name : '',
                    PaidOut: false,
                }
            })
        } else {
            db.ref('loans').child(userData.id).update({
                [usersNoteId] : {
                    DateOfCreation: oldNote.DateOfCreation,
                    DateOfDBInput: oldNote.DateOfDBInput,
                    Date: newDBObject.date && newDBObject.date !== 'undefined-undefined-' ? newDBObject.date : oldNote.Date,
                    Value: newDBObject.sum ? newDBObject.sum : oldNote.Value,
                    Currency: newDBObject.curr ? newDBObject.curr : oldNote.Currency,
                    Type: newDBObject.value ? newDBObject.value : oldNote.Type,
                    Name: newDBObject.name ? newDBObject.name : oldNote.Name,
                    PaidOut: oldNote.PaidOut,
                }
            })
        }
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ date: '', sum: '', name: '',});
            setValue('')
            setCurrency('')
        }
    }, [formState, reset, setValue])

    return (
        <>  
            <Form onSubmit={handleSubmit(onSubmit)} className='finance__form form_hiden'>
                <h2>{mode === 'create' ? 'Додати' : 'Редагувати'} депозит</h2>

                <Form.Field>
                    <label>Ім'я / компанія:</label>
                    {mode === 'create' ? 
                        <input  
                            type="text"
                            placeholder="Ім'я..."
                            {...register('name', {
                                required: 'error value'
                            })}
                            maxLength="30"
                        /> 
                    : 
                        <input  
                            type="text"
                            placeholder={oldNote.Name}
                            {...register('name', {
                                required: false
                            })}
                            maxLength="30"
                        /> 
                    }
                    {errors.name && <p className='error_message'>*Заповніть поле</p>}
                </Form.Field>

                <Form.Field>
                    <label>Категорія:</label>

                    {mode === 'create' ?
                        <DatalistInput
                            style={{marginTop: '8px'}}
                            value={value}
                            setValue={setValue}
                            placeholder="Дебет"
                            items={[
                                {id: 'In', value: 'Дебет'},
                                {id: 'Out', value: 'Кредит'},
                            ]}
                        /> :
                        <DatalistInput
                            style={{marginTop: '8px'}}
                            value={value}
                            setValue={setValue}
                            placeholder={oldNote.Type}
                            items={[
                                {id: 'In', value: 'Дебет'},
                                {id: 'Out', value: 'Кредит'},
                            ]}
                        />
                    }
                    
                </Form.Field>

                <Form.Field style={{display: 'flex', alignItems: 'flex-end', gap: '10px', marginBottom: '0'}}>
                    <Form.Field>
                        <label>Сума платежу:</label>
                        {mode === 'create' ? 
                            <input
                                type="number"
                                placeholder='Сума...'
                                {...register('sum', {
                                    required: 'error value'
                                })}
                                min={1}
                                max={1000000000}
                            />
                        :   
                            <input
                                type="number"
                                placeholder={oldNote.Value}
                                {...register('sum', {
                                    required: false,
                                })}
                                min={1}
                                max={1000000000}
                            />
                        }
                        {errors.sum && <p className='error_message'>*Заповніть поле</p>}
                    </Form.Field>

                    <Form.Field>
                        {mode === 'create' ? 
                            <DatalistInput
                                style={{marginTop: '8px'}}
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
                            /> :
                            <DatalistInput
                                style={{marginTop: '8px'}}
                                value={currency}
                                setValue={setCurrency}
                                placeholder={oldNote.Currency}
                                items={[
                                    { id: 'UAH', value: 'UAH' },
                                    { id: 'USD', value: 'USD' },
                                    { id: 'EUR', value: 'EUR' },
                                    { id: 'GBP', value: 'GBP' },
                                    { id: 'JPY', value: 'JPY' },
                                    { id: 'CNY', value: 'CNY' },
                                ]}
                            />
                        }
                        
                        {errors.sum && <p className='error_message'>&nbsp;</p>}
                    </Form.Field>
                </Form.Field>

                <Form.Field>
                    <label>Дата платежу:</label>
                    {mode === 'create' ? 
                        <input  
                            type="date"
                            {...register('date', {
                                required: 'error date',
                                max: `${dateObj.year + 5}-${dateObj.month}-${dateObj.day}`,
                                min: `${dateObj.year - 5}-${dateObj.month}-${dateObj.day}`,
                            })}
                        />
                    :
                        <input  
                            {...register('date', {
                                required: false,
                                max: `${dateObj.year + 5}-${dateObj.month}-${dateObj.day}`,
                                min: `${dateObj.year - 5}-${dateObj.month}-${dateObj.day}`,
                            })}
                            placeholder={oldNote.Date}
                            type="text"
                            onFocus={(e) => e.target.type='date'}
                            onBlur={(e) => e.target.type = "text"}
                        />
                    }
                    {errors.date && <p className='error_message'>*Заповніть поле</p>}
                </Form.Field>

                <Form.Field className='btns_field'>
                    <Button className='non_active_btn' onClick={() => {setValue(''); openForm('back')}} type='reset'>Назад</Button>
                    <Button className='sign-in_btn' type='submit'>{mode === 'create' ? 'Створити' : 'Зберегти' }</Button>
                </Form.Field>

            </Form>
        </>
    );
}
  
export default LoanForm;