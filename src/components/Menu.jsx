import './Menu.css'
import Cafe from './Cafe'
import Submenu from './Submenu'

export default function Menu() {
    const menu = [
        {
            title: 'Холодные напитки',
            items: [
                {
                    name: 'Айс Латте',
                    count: '300мл/500мл',
                    price: '220р/260р'
                },
                {
                    name: 'Молочный коктейль',
                    count: '300мл/500мл',
                    price: '160р/280р'
                },
                {
                    name: 'Какао холодный',
                    count: '350мл',
                    price: '250р'
                },
                {
                    name: 'Бамбл "Лайт/Хард"',
                    count: '250мл/300мл',
                    price: '200р/230р'
                },
                {
                    name: 'Мохито (в ассортименте)',
                    count: '300мл/500мл',
                    price: '200р/300р'
                },
            ]
        },
        {
            title: 'Горячие напитки',
            items: [
                {
                    name: 'Латте',
                    count: '250/350мл',
                    price: '200р/250р'
                },
                {
                    name: 'Капучино',
                    count: '250/350мл',
                    price: '200р/250р'
                },
                {
                    name: 'Раф',
                    count: '350мл',
                    price: '250р'
                },
                {
                    name: 'Флэт',
                    count: '250/350мл',
                    price: '250р/300р'
                },
                {
                    name: 'Какао',
                    count: '250/350мл',
                    price: '200р/250р'
                },
                {
                    name: 'Эспрессо',
                    count: '50мл',
                    price: '100р'
                },
                {
                    name: 'Американо',
                    count: '150мл',
                    price: '100р'
                },
                {
                    name: 'чай (листовой в ассортименте)',
                    count: '500мл',
                    price: '250р'
                },
                {
                    name: 'напиток "облепиха"',
                    count: '250мл/500мл',
                    price: '200р/300р'
                },
                {
                    name: 'напиток "глинтвейн"',
                    count: '250мл/500мл',
                    price: '200р/300р'
                },
                {
                    name: 'матча латте',
                    count: '250мл',
                    price: '220р'
                },
            ]
        },
    ]

    return (
        <div className='menu'>
            {
                // menu.map(({title, items}) => (<Cafe title={title} items={items} />))
                menu.map(({title, items}) => (<Submenu title={title} items={items} />))
            }
        </div>
    )
}