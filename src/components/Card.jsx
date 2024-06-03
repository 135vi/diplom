import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({title, href, imageURL}) {
    return (
        <div className='card'>
            <img src={imageURL} />
            <h3>{ title }</h3>
            <Link to={href}>подробнее...</Link>
        </div>
    )
}