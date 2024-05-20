import './Footer.css'

function Footer() {
    return (<footer>
        <ul class="left">
            <li>
                <h3>Адрес</h3>
                <a>ул. Гайдара, 22</a>
            </li>
            <li>
                <h3>Режим работы</h3>
                <a>каждый день с 9:00 до 20:30</a>
            </li>
        </ul>
        <ul class="right">
            <li>
                <h4>WA</h4>
                <p>Инфо/бронирование/вакансии</p>
                <a href="tel:89951884004">8-995-188-40-04</a>
            </li>
            <li>
                <h4>TG</h4>
                <p>Подпишись, будь в курсе всех событий</p>
                <a href="https://t.me/s/goody_moms">@goody_moms</a>
            </li>
        </ul>
    </footer>)
}

export default Footer