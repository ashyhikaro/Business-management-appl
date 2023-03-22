import '../../styles/forms/form.scss'
import '../../styles/forms/reg-page.scss'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Form, Button } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from 'react';

function RegistrationPage({createAccount, customError}) {
        const { register, handleSubmit, setError, formState: { errors } } = useForm();
        const [regionInfo, setRegion] = useState({ country: '', region: ''})
        const navigate = useNavigate()

        const now = new Date()
        const month = now.getMonth() + 1
        const day = now.getDate()

        const dateObj = {
                day: String(day).length === 1 ? `0${day}` : day,
                month: String(month).length === 1 ? `0${month}` : month,
                year: now.getFullYear(),
        }


        const onSubmit = (data) => {
                if (data.password === data.passTwo) {
                        createAccount({...data, country: regionInfo.country, region: regionInfo.region})
                        setRegion({ country: '', region: ''})
                } else {
                        setError('passTwo', {type: "value", message: 'passwords do not match'})
                }
        }

        return (
                <div className='registration_page'>
                        <div className="form_block">
                                {customError ? <p className='error_message'>{customError}</p> : null}
                                <br />
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                        <h1>Реєстрація</h1>
                                        <div className='reg_block'>
                                                <Form.Field className='field_block'>
                                                        <Form.Field>
                                                                <label>Email:</label>
                                                                <input  type='email'
                                                                        placeholder="Еmail..." 
                                                                        {...register('email', {
                                                                                required: 'error email'
                                                                        })}
                                                                />
                                                                {errors.email && <p className='error_message'>*Некоректний email</p>}
                                                        </Form.Field>

                                                        <Form.Field>
                                                                <label>Пароль:</label>
                                                                <input  type='password'
                                                                        placeholder="Пароль..." 
                                                                        {...register('password', {
                                                                                required: 'error password'
                                                                        })}
                                                                />
                                                                {errors.password && <p className='error_message'>*Некоректний пароль</p>}
                                                        </Form.Field>

                                                        <Form.Field>
                                                                <label>Підтвердіть пароль:</label>
                                                                <input  type='password'
                                                                        placeholder="Пароль..."
                                                                        {...register('passTwo', {
                                                                                required: 'error confirm'
                                                                        })}
                                                                />
                                                                {errors.passTwo && <p className='error_message'>*Паролі не співпадають</p>}
                                                        </Form.Field>

                                                        <Form.Field>
                                                                <label>Номер телефону:</label>
                                                                <p>Формат: 000-000-0000</p>
                                                                <input  type='tel'
                                                                        placeholder="Номер телефону..." 
                                                                        {...register('phone', {
                                                                                required: 'error phone number'
                                                                        })}
                                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                />
                                                                {errors.phone && <p className='error_message'>*Некоректний номер телефону</p>}
                                                        </Form.Field>
                                                </Form.Field>

                                                <Form.Field className='field_block'>
                                                        <Form.Field>
                                                                <label>Ім'я:</label>
                                                                <input  type='text'
                                                                        placeholder="Ім'я..." 
                                                                        {...register('firstname', {
                                                                                required: 'error confirm'
                                                                        })}
                                                                        maxLength="10"
                                                                />
                                                                {errors.firstname && <p className='error_message'>*Відсутнє ім'я</p>}
                                                        </Form.Field>

                                                        <Form.Field>
                                                                <label>Прізвище:</label>
                                                                <input  type='text'
                                                                        placeholder="Прізвище..." 
                                                                        {...register('lastname', {
                                                                                required: 'error lastname'
                                                                        })}
                                                                        maxLength="40"
                                                                />
                                                                {errors.lastname && <p className='error_message'>*Відсутнє прізвище</p>}
                                                        </Form.Field>

                                                        <Form.Field>
                                                                <label>Дата народження:</label>
                                                                <input  type='date'
                                                                        {...register('age', {
                                                                                required: 'error age',
                                                                                max: `${dateObj.year - 18}-${dateObj.month}-${dateObj.day}`,
                                                                                min: `${dateObj.year - 100}-${dateObj.month}-${dateObj.day}`,
                                                                        })}
                                                                />
                                                                {errors.age && <p className='error_message'>*Некоректна дата народження</p>}
                                                        </Form.Field>

                                                        <Form.Field>
                                                                <label>Країна та регіон:</label>
                                                                <CountryDropdown
                                                                        value={regionInfo.country}
                                                                        onChange={(val) => setRegion(prev => {return {...prev, country: val }})} 
                                                                />
                                                                <RegionDropdown
                                                                        country={regionInfo.country}
                                                                        value={regionInfo.region}
                                                                        onChange={(val) => setRegion(prev => {return {...prev, region: val }})} 
                                                                />
                                                        </Form.Field>
                                                </Form.Field>
                                        </div>

                                        <Form.Field className='btns_field'>
                                                <Button className='non_active_btn sign_btn' type='button' onClick={(e) => {
                                                        navigate('/')
                                                }}>Авторизація</Button>
                                                <Button className='sign-in_btn sign_btn' type='submit'>Зареєструватись</Button>
                                        </Form.Field>
                                </Form>
                        </div>
                </div>
        )
}

export default RegistrationPage