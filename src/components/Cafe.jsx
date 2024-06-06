import './Cafe.css'

const Cafe = ({title, items}) => {
    return (
        <div className='cafe'>

            <div className='menu'>
                <h4>{ title }</h4>
                <div>{ items
                    // return <div className='menu-item'>
                    //     <div className='name'>{item.name}</div>
                    //     <div className='menu-placeholder'></div>
                    //     <div className='count'>{item.count}</div>
                    //     <div className='menu-placeholder'></div>
                    //     <div className='price'>{item.price}</div>
                    // </div>
                }</div>
            </div>

            {/* <div className='menu-item'>
                <div className='name'>Айс Латте</div>
                <div className='menu-placeholder'></div>
                <div className='count'>300мл/500мл</div>
                <div className='menu-placeholder'></div>
                <div className='price'>220р/260р</div>
            </div> */}


            {/* <div className='menu'>
                <h4>Холодные напитки</h4>
                <ul>



                    <li>Айс Латте ..... 300мл/500мл ..... <b>220р/260р</b></li>
                    <li>Молочный коктейль ..... 300мл/500мл ..... <b>160р/280р</b></li>
                    <li>Какао холодный ..... 350мл ..... <b>250р</b></li>
                    <li>Бамбл "Лайт/Хард" ..... 250/300мл ..... <b>200р/230р</b></li>
                    <li>Мохито (в ассортименте) ..... 300мл/500мл ..... <b>200р/300р</b></li>
                </ul>
            </div>
            <div className='menu'>
                <h4>Горячие напитки</h4>
                <ul>
                    <li>Латте ... 250/350мл ..... <b>200р/250р</b></li>
                    <li>Капучино ... 250/350мл ..... <b>200р/250р</b></li>
                    <li>Раф ... 350мл ..... <b>250р</b></li>
                    <li>Флэт ... 250/350мл ..... <b>250р/300р</b></li>
                    <li>Какао ... 250/350мл ..... <b>200р/250р</b></li>
                    <li>Эспрессо ... 50мл ..... <b>100р</b></li>
                    <li>Американо ... 150мл ..... <b>100р</b></li>
                </ul>

            </div> */}
        </div>
    )
} 

export default Cafe