import './Cards.css'
import Card from './Card'

export default function Cards() {
    const cards = [
        {
            title: 'Детская комната',
            href: '#',
            imageURL: 'https://laterrassa.ru/upload/iblock/d2b/d2bbff740d3e50065572f6e38215cc0a.jpg'
        },
        {
            title: 'Уютное кафе',
            href: '#',
            imageURL: 'https://tillypad.ru/data/storage/O6T3HAhx/andy_falconer_dwQRixazu9I_unsplash.jpg'
        },
        {
            title: 'Проведение праздников',
            href: '#',
            imageURL: 'https://1place.su/ru/blog/wp-content/uploads/2018/05/post30.jpg'
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