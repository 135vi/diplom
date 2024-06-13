import './Cards.css'
import Card from './Card'

export default function Cards() {
    const cards = [
        {
            title: 'Детская комната',
            href: '/room',
            imageURL: 'https://www.president-mobility.ru/wp-content/uploads/2016/03/2-25.jpg'
        },
        {
            title: 'Уютное кафе',
            href: '/cafe',
            imageURL: 'image/cafe.png'
        },
        {
            title: 'Проведение праздников',
            href: '/party',
            imageURL: 'https://1place.su/ru/blog/wp-content/uploads/2018/05/post30.jpg',
        },
    ]

    return (
        <div className='cards'>
            {
                cards.map(({title, href, imageURL}) => (<Card title={title} href={href} imageURL={imageURL} />))
            }
        </div>
    )
}