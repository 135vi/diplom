import './Footer.css'
import Contacts from './Contacts'

function Footer() {
    return (<footer>
        <div class="left">
            <h3>Адрес</h3>
            <a>ул. Гайдара, 22</a>
        </div>
        <div class="right">
            <h3>Режим работы</h3>
            <a>каждый день с 9:00 до 20:30</a>
        </div>
        {/* <Contacts /> */}
    </footer>)
}

export default Footer