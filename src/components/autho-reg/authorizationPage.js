import '../../styles/forms/form.scss'
import '../../styles/forms/log-page.scss'
import google from '../../img/google_icon.png'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AuthorizationPage({authorAccount, signInWithGoogle, customError}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        authorAccount(data)
    }

    return (
        <div className='login_page'>
            <div className="form_block login_block" >
                {customError ? <p className='error_message'>{customError}</p> : null}
                <br />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Авторизація</h1>
                    <Form.Field>
                        <label>Email:</label>
                        <input  type="text" 
                                placeholder="Введіть ваш email..." 
                                {...register('email', {
                                    required: 'error email'
                                })}
                        />
                        {errors.email && <p className='error_message'>*Невірний пароль або email</p>}
                    </Form.Field>
                    
                    <Form.Field>
                        <label>Пароль:</label>
                        <input  type="password" 
                                placeholder="Введіть ваш пароль..." 
                                {...register('password', {
                                    required: 'error password'
                                })}
                        />
                        {errors.password && <p className='error_message'>*Невірний пароль або email</p>}
                    </Form.Field>
                    
                    <Form.Field className='btns_field'>
                        <Button className='sign_btn non_active_btn' type='button' onClick={(e) => {
                                navigate('/registration')
                            }}
                        >Реєстрація</Button>
                        <Button className='sign_btn sign-in_btn' type='submit'>Вхід</Button>
                        <Button className='google_btn' onClick={(e) => {
                                    e.preventDefault()
                                    signInWithGoogle()
                                }
                            }>
                            <img src={google} alt="google" width='35px'/>
                        </Button>
                    </Form.Field>
                </Form>
            </div>
        </div>
    )
}

export default AuthorizationPage;