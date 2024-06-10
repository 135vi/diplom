import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({title, href, imageURL}) {
    return (
        <Link to={href} className='card'>
            <img src={imageURL} />
            <h3>{ title }</h3>
            <a href={href}>подробнее...</a>
        </Link>
    )
}