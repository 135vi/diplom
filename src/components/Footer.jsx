import './Footer.css'
import Contacts from './Contacts'

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
        {/* <Contacts /> */}
    </footer>)
}

export default Footer