import './Contact.css'

export default function Contact({title, href}) {
    return (
        <ul className='contect'>
            <li>
                <img src={imageURL} />
                <p>{ title }</p>
                <a href={href}>8-995-188-40-04</a>
            </li>
            <li>
                <img src={imageURL} />
                <p>{ title }</p>
                <a href={href}>@goody_moms</a>
            </li>
        </ul>
        
    )
}