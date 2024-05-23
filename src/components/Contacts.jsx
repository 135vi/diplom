import './Contacts.css';
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";


// import Contact from './Contact'

export default function Contacts() {
    return (
        <div className='contacts'>
            <h1>контакты</h1>
            <div className='call'>
                <div className='call_icons'>
                    <FaWhatsapp color='green' size={'60px'} />
                    <IoIosCall color='pink' size={'60px'} />
                </div>
                <div className='call_desc'>
                    <ul>
                        <li>инфо</li>
                        <li>бронирование</li>
                        <li>вакансии</li>
                    </ul>
                </div>
            </div>
            <div className='line'></div>
            <div className='subscr'>
                <div className='subscr_icons'>
                    <FaTelegramPlane color='#5599ff' size={'60px'} />
                </div>
                <div className='subscr_desc'>
                    <p>подпишись, будь в курсе всех событий</p>
                </div>
            </div>
        </div>
    )
}