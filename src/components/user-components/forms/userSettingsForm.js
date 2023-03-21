import '../../../styles/forms/log-page.scss'
import '../../../styles/forms/form.scss'
import { Form, Button } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

function UserSettingForm({setUserSettings, handleLogout, nonActive}) {
        const { register, reset, handleSubmit, formState: { errors } } = useForm();
        const [regionInfo, setRegion] = useState({ country: '', region: ''})
        const navigate = useNavigate()

        const onSubmit = (data) => {
                setUserSettings({...data, country: regionInfo.country, region: regionInfo.region})
                setRegion({ country: '', region: ''})

                if (!localStorage.getItem('user')) {
                        navigate('/');
                }
        }

        return (
                <div className={`form_block login_block ${nonActive}`}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Field>
                                        <label>Ім'я:</label>
                                        {!localStorage.getItem('user') ? 
                                                <input  
                                                        type='text'
                                                        placeholder="Ім'я" 
                                                        {...register('firstname', {
                                                                required: "Відсутнє ім'я користувача"
                                                        })}
                                                        maxLength="10"
                                                />: 
                                                <input
                                                        type='text'
                                                        placeholder="Ім'я" 
                                                        {...register('firstname')}
                                                        maxLength="10"
                                                />

                                        }
                                        {errors.firstname && <p className='error_message'>*Відсутнє ім'я користувача</p>}
                                </Form.Field>

                                <Form.Field>
                                        <label>Прізвище:</label>
                                        {!localStorage.getItem('user') ? 
                                                <input  type='text'
                                                        placeholder="Прізвище" 
                                                        {...register('lastname', {
                                                                required: 'Відсутнє прізвище користувача'
                                                        })}
                                                        maxLength="15"
                                                /> :
                                                <input  type='text'
                                                        placeholder="Прізвище" 
                                                        {...register('lastname')}
                                                        maxLength="15"
                                                />
                                        }
                                        {errors.lastname && <p className='error_message'>*Відсутнє прізвище користувача</p>}
                                </Form.Field>

                                <Form.Field>
                                        <label>Вік:</label>
                                        {!localStorage.getItem('user') ? 
                                                <input  type='date'
                                                        {...register('age', {
                                                                required: 'Відсутня дата народження користувача'
                                                        })}
                                                /> :
                                                <input  type='date'
                                                        {...register('age')}
                                                />
                                        }
                                        {errors.age && <p className='error_message'>*Відсутня дата народження користувача</p>}
                                </Form.Field>

                                <Form.Field>
                                        <label>Номер телефону:</label>
                                        <p>Формат: 000-000-0000</p>
                                        {!localStorage.getItem('user') ? 
                                                <input  type='tel'
                                                        placeholder="Номер телефону" 
                                                        {...register('phone', {
                                                                required: 'Пропущено номер телефону'
                                                        })}
                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                /> : 
                                                <input  type='tel'
                                                        placeholder="Номер телефону" 
                                                        {...register('phone')}
                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                />
                                        }
                                        {errors.phone && <p className='error_message'>*Неправильний номер</p>}
                                </Form.Field>

                                <Form.Field>
                                        <label>Країна та регіон:</label>
                                        <CountryDropdown
                                                value={regionInfo.country}
                                                onChange={(val) => setRegion(prev => {
                                                        if (val !== prev.country) {
                                                                return {country: val, region: '-'}       
                                                        } else {
                                                                return {...prev, country: val}
                                                        }
                                                })} 
                                        />
                                        <RegionDropdown
                                                country={regionInfo.country}
                                                value={regionInfo.region}
                                                onChange={(val) => setRegion(prev => {return {...prev, region: val }})} 
                                        />
                                </Form.Field>

                                {!localStorage.getItem('user') ? 
                                        <Form.Field className='btns_field'>
                                                <Button className='cancel_btn' type='button' onClick={(e) => {
                                                        e.preventDefault()
                                                        navigate('/'); 
                                                        handleLogout()
                                                }}>Скасувати</Button>
                                                <Button className='submit_btn' type='submit'>Зберегти</Button>
                                        </Form.Field> 
                                :
                                        <Form.Field className='btns_field'>
                                                <Button className='cancel_btn' type='button' onClick={() => {
                                                        document.querySelector('.form_block').classList.toggle('non_active')
                                                        reset({ firstname: '', lastname: '', age: '', phone: '',})
                                                }}>Скасувати</Button>
                                                <Button className='submit_btn' type='submit'>Зберегти</Button>
                                        </Form.Field> 
                                }    
                        </Form>
                </div>
        )
}

export default UserSettingForm;