import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (<header>
        <nav>
            <ul>
                <Link to='/' class="logo-header">
                    <img src="image/logoGOOTY.png" />
                </Link>
                <li><Link to="/contacts">контакты</Link></li>
                <li><a href="#">мероприятия</a></li>
                <li><a href="#">мастер классы</a></li>
                <li><Link to='/'>услуги</Link></li>
            </ul>
        </nav>
    </header>)
}

export default Header