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
            ]
        },
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