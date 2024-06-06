import './Room.css'

function Room() {
    return (
        <div className='room'>
            <div className='info'>
                <ul>
                    <li>1 час .................. <b>250р</b></li>
                    <li>2 часа .................. <b>450р</b></li>
                    <li>3 часа .................. <b>600р</b></li>
                </ul>
                <p>+30 минут (после каждого часа посещения) <b>150р</b></p>
            </div>
            <div className='info'>
                <ul>
                    <li>БЕЗЛИМИТ .................. <b>900р</b></li>
                </ul>
                <p>более 3,5 часов пребывания в игровой комнате</p>
            </div>
            <div className='info'>
                <ul>
                    <li>Абонемент 10 часов .................. <b>2000р</b></li>
                </ul>
            </div>
            <p>Семья (двое и более детей) скидка <b>10%</b> от стоимости прайса</p>
        </div>
    )
} 

export default Room