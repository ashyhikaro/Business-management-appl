import '../../styles/components/header.scss'
import burgerImg from '../../img/burger_menu.png'
import closeImg from '../../img/close.png'
import {NavLink} from 'react-router-dom';

function Header({handleLogout}) {

  function toggleShowMenu() {
    if (document.querySelector('.burger_btn_img').src == burgerImg) {
      document.querySelector('.burger_btn_img').src = closeImg
    } else {
      document.querySelector('.burger_btn_img').src = burgerImg
    }

    document.querySelector('.menu_small_screen').classList.toggle('hidden')
  }

  return (
    <nav>
      <div className='tittle'><NavLink to="/">FinFlow</NavLink></div>
      <div className='burger_btn' onClick={toggleShowMenu}>
        <img src={burgerImg} className='burger_btn_img'></img>
      </div>

      <ul className='menu_small_screen hidden'>
        <li><NavLink to="/">Головна</NavLink></li>
        <li><NavLink to="/user-profile">Профіль</NavLink></li>
        <li><NavLink to="/finances">Фінанси</NavLink></li>
        <li><NavLink to="/loans">Депозити</NavLink></li>
        <li><NavLink to="/cash-flow">Аналітика</NavLink></li>
        <li><NavLink to="/reports">Статистика</NavLink></li>
        <li onClick={handleLogout}><NavLink to="/">Вихід</NavLink></li>
      </ul>

      <ul className='menu'>
          <li><NavLink to="/">Головна</NavLink></li>
          <li><NavLink to="/user-profile">Профіль</NavLink></li>
          <li><NavLink to="/finances">Фінанси</NavLink></li>
          <li><NavLink to="/loans">Депозити</NavLink></li>
          <li><NavLink to="/cash-flow">Аналітика</NavLink></li>
          <li><NavLink to="/reports">Статистика</NavLink></li>
      </ul>
      <ul className='exit_btn'>
        <li onClick={handleLogout}><NavLink to="/">Вихід</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;