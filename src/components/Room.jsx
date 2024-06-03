import './Room.css'

function Room() {
    return (
        <div className='room'>
            <div className='info'>
                <ul>
                    <li>1 час .................. 250р</li>
                    <li>2 часа .................. 450р</li>
                    <li>3 часа .................. 600р</li>
                </ul>
                <p>+30 минут (после каждого часа посещения) 150р</p>
            </div>
            <div className='info'>
                <ul>
                    <li>БЕЗЛИМИТ .................. 900р</li>
                </ul>
                <p>более 3,5 часов пребывания в игровой комнате</p>
            </div>
            <p>Семья (двое и более детей) скидка 10% от стоимости прайса</p>
            <div className='info'>
                <ul>
                    <li>Абонемент 10 часов .................. 2000р</li>
                </ul>
            </div>
        </div>
    )
} 

export default Room