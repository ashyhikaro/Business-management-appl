import '../../styles/components/header.scss'
import {NavLink} from 'react-router-dom';

function Header({handleLogout}) {
  return (
    <nav>
      <ul>
        <ul>
          <li><NavLink to="/">Головна</NavLink></li>
          <li><NavLink to="/user-profile">Профіль</NavLink></li>
          <li><NavLink to="/finances">Фінанси</NavLink></li>
          <li><NavLink to="/loans">Позика</NavLink></li>
          <li><NavLink to="/cash-flow">Рух коштів</NavLink></li>
          <li><NavLink to="/reports">Статистика</NavLink></li>
        </ul>
        
        <li onClick={handleLogout}><NavLink to="/">Вихід</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;