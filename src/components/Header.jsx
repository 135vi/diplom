import './Header.css'

function Header() {
    return (<header>
        <nav>
            <ul>
                <a href='#' class="logo-header">
                    <img src="image/logoGOOTY.png" />
                </a>
                <li><a href="#">мероприятия</a></li>
                <li><a href="#">мастер классы</a></li>
                <li><a href="#">услуги</a></li>
            </ul>
        </nav>
    </header>)
}

export default Header