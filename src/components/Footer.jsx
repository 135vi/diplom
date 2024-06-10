import './Footer.css'
import Contacts from './Contacts'

function Footer() {
    return (<footer>
        <div class="left">
            <h3>Адрес</h3>
            <p>ул. Гайдара, 22</p>
        </div>
        <div class="right">
            <h3>Режим работы</h3>
            <p>каждый день с 9:00 до 20:30</p>
        </div>
        {/* <Contacts /> */}
    </footer>)
}

export default Footer