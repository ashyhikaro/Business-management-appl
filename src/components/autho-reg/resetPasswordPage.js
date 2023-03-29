import '../../styles/forms/reset-page.scss'
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage({auth}) {
    const navigate = useNavigate()

    const resetPassword = (auth) => {
        const email = document.querySelector('input').value

        sendPasswordResetEmail(auth, email)
        .then(() => {
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
    

    return (
        <div className='reset__container'>
            <div className='reset_form'>
                <h3>Введіть електронну адресу:</h3>
                <input type='text' placeholder='Ваша пошта...'></input>
                <br/>
                <button className='back_btn' onClick={() => navigate('/')}>Назад</button>
                <button className='reset_btn' onClick={() => resetPassword(auth)}>Відновити пароль</button>
            </div>
        </div>
    )
}

export default ResetPasswordPage;