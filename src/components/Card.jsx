import './Card.css'

export default function Card({title, href, imageURL}) {
    return (
        <div className='card'>
            <img src={imageURL} />
            <h3>{ title }</h3>
            <a href={href}>подробнее...</a>
        </div>
    )
}