import 'react-datalist-input/dist/styles.css';
import '../../../styles/forms/form.scss';
import '../../../styles/forms/finance-form.scss';

import { useEffect } from 'react';
import DatalistInput, { useComboboxControls } from 'react-datalist-input';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useState } from 'react';

import { db } from "../../../index";

function LoanForm({userData, openForm}) {
    const { register, reset, handleSubmit, formState, formState: { errors, isSubmitSuccessful } } = useForm();
    const { setValue, value } = useComboboxControls();
    const [currency, setCurrency] = useState('')

    const onSubmit = (data) => {
        const dateOfTrans = data.date.split('-')

        let newDBObject = {
            ...data,
            id: `${Date.now()}`, 
            date: `${dateOfTrans[2]}-${dateOfTrans[1]}-${dateOfTrans[0]}`
        }

        if (!value) {
            newDBObject = {
                ...newDBObject,
                value: 'Ми винні',
            }
        } else {
            newDBObject = {
                ...newDBObject, 
                value,
            }
        }

        currency === '' ? newDBObject = {...newDBObject, curr: 'UAH',} : newDBObject = {...newDBObject, curr: currency,}

        const now = new Date()
        const month = now.getMonth() + 1
        const day = now.getDate()

        const nowObj = {
            day: String(day).length === 1 ? `0${day}` : day,
            month: String(month).length === 1 ? `0${month}` : month,
            year: now.getFullYear(),
        }

        db.ref('loans').child(userData.id).update({
            [newDBObject.id] : {
                DateOfCreation: `${nowObj.day}-${nowObj.month}-${nowObj.year}`,
                DateOfDBInput: now,
                Date: newDBObject.date,
                Value: newDBObject.sum,
                Currency: newDBObject.curr,
                Type: newDBObject.value,
                Name: newDBObject.name ? newDBObject.name : '',
            }
        })
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
                <h2>Додати позику</h2>

                <Form.Field>
                    <label>Ім'я / компанія:</label>
                    <input  
                        type="text"
                        placeholder="Ім'я..."
                        {...register('name', {
                            required: 'error value'
                        })}
                        maxLength="30"
                    />
                    {errors.name && <p className='error_message'>*Заповніть поле</p>}
                </Form.Field>

                <Form.Field>
                    <label>Категорія:</label>

                    <DatalistInput
                        style={{marginTop: '8px'}}
                        value={value}
                        setValue={setValue}
                        placeholder="Ми винні"
                        items={[
                            {id: 'In', value: 'Ми винні'},
                            {id: 'Out', value: 'Нам винні'},
                        ]}
                    />
                </Form.Field>

                <Form.Field style={{display: 'flex', alignItems: 'flex-end', gap: '10px', marginBottom: '0'}}>
                    <Form.Field>
                        <label>Сума платежу:</label>
                        <input  
                            type="number"
                            placeholder='Сума...'
                            {...register('sum', {
                                required: 'error value'
                            })}
                            min={1}
                            max={1000000000}
                        />
                        {errors.sum && <p className='error_message'>*Заповніть поле</p>}
                    </Form.Field>

                    <Form.Field>
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
                        />
                        {errors.sum && <p className='error_message'>&nbsp;</p>}
                    </Form.Field>
                </Form.Field>

                <Form.Field>
                    <label>Дата платежу:</label>
                    <input  
                        type="date"
                        {...register('date', {
                            required: 'error date'
                        })}
                    />
                    {errors.date && <p className='error_message'>*Заповніть поле</p>}
                </Form.Field>

                <Form.Field className='btns_field'>
                    <Button className='non_active_btn' onClick={() => {setValue(''); openForm()}} type='reset'>Назад</Button>
                    <Button className='sign-in_btn' type='submit'>Створити</Button>
                </Form.Field>

            </Form>
        </>
    );
}
  
export default LoanForm;