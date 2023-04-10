import '../../styles/components/user-page.scss'
import UserSettingForm from "./forms/userSettingsForm";
import burgerImg from '../../img/burger_menu.png'

import { useEffect } from 'react';

function UserProfile({userData, setUserSettings}) {
    function openSttingForm() {
        document.querySelector('.form_block').classList.toggle('non_active')
    }

    useEffect(() => {
        if (!document.querySelector('.menu_small_screen').classList.contains('hidden')) {
            document.querySelector('.menu_small_screen').classList.add('hidden')
            document.querySelector('.burger_btn_img').src = burgerImg
        }
        
    }, [])

    return (
        <div className="profile_page page">
            <h1 className='user__profile_title title'>Профіль</h1>

            <div className='user__info_container'>
                <div className='user_info'>
                    <p>Ім'я: <span>{userData.firstname}</span></p>
                    <p>Прізвище: <span>{userData.lastname}</span></p>
                    <p>Дата народження: <span>{userData.age}</span></p>
                    <p>Email: <span>{userData.email}</span></p>
                    <p>Телефон: <span>{userData.phone}</span></p>
                    <p>Країна: <span>{userData.country}</span></p>
                    <p>Регіон: <span>{userData.region}</span></p>

                    <button onClick={openSttingForm} className='open_setting_btn'>Налаштування</button>
                </div>

                <UserSettingForm setUserSettings={setUserSettings} nonActive={'non_active'}/>
            </div>
        </div>
    )
}

export default UserProfile;