import './Submenu.css';

const Submenu = ({ title, items }) => {
    return <>
        <h4>{ title }</h4>
        { items.map(({name, count, price}, idx) => (
            <div className='menu-item' key={name + idx}>
                <div className='name'>{name}</div>
                <div className='menu-placeholder'></div>
                <div className='count'>{count}</div>
                <div className='menu-placeholder'></div>
                <div className='price'>{price}</div>
            </div>
        )) }
    </>
}

export default Submenu;