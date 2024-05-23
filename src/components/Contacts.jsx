import './Contacts.css'
import Contact from './Contact'

export default function Contacts() {
    const contacts = [
        {
            title: 'Инфо/бронирование/вакансии',
            href: 'tel:89951884004',
            imageURL: '',
        },
        {
            title: 'Подпишись, будь в курсе всех событий',
            href: 'https://t.me/s/goody_moms',
            imageURL: '',
        },
    ]

    return (
        <div className='contacts'>
            {
                contacts.map(({title, href, imageURL}) => (<Contact title={title} href={href} imageURL={imageURL} />))
            }
        </div>
    )
}