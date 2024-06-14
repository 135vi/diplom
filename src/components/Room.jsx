import './Room.css'

function Room() {
    return (
        // <div className='room'>
        //     <div className='info'>
        //         <ul>
        //             <li>1 час .................. <b>250р</b></li>
        //             <li>2 часа .................. <b>450р</b></li>
        //             <li>3 часа .................. <b>600р</b></li>
        //         </ul>
        //         <p>+30 минут (после каждого часа посещения) <b>150р</b></p>
        //     </div>
        //     <div className='info'>
        //         <ul>
        //             <li>БЕЗЛИМИТ .................. <b>900р</b></li>
        //         </ul>
        //         <p>более 3,5 часов пребывания в игровой комнате</p>
        //     </div>
        //     <div className='info'>
        //         <ul>
        //             <li>Абонемент 10 часов .................. <b>2000р</b></li>
        //         </ul>
        //     </div>
        //     <p>Семья (двое и более детей) скидка <b>10%</b> от стоимости прайса</p>
        // </div>
        <>
            <div className='info-1'>
                <div className='text'>1 час</div>
                <div className='line'></div>
                <div className='price'>250р</div>
            </div>
            <div className='info'>
                <div className='text'>2 часа</div>
                <div className='line'></div>
                <div className='price'>450р</div>
            </div>
            <div className='info'>
                <div className='text'>3 часа</div>
                <div className='line'></div>
                <div className='price'>600р</div>
            </div>
            <div className='info'>
                <div className='text'>+30 минут</div>
                <p>(после каждого часа посещения)</p>
                <div className='price'>150р</div>
            </div>
            <div className='info'>
                <div className='text'>БЕЗЛИМИТ</div>
                <div className='line'></div>
                <div className='price'>900р</div>
            </div>
            <p>более 3,5 часов пребывания в игровой комнате</p>
            <div className='info'>
                <div className='text'>Абонемент 10 часов</div>
                <div className='line'></div>
                <div className='price'>2000р</div>
            </div>
            <h4>Семья (двое и более детей) скидка <b>10%</b> от стоимости прайса</h4>

        </>

        
    )
} 

export default Room