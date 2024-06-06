import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Contacts from './Contacts';
import Page from './Page';
import Room from './Room';
import Cafe from './Cafe';
import Party from './Party';
import Menu from './Menu';

// import { Home } from './pages/Home';
// import { Shop } from './pages/Shop';
// import { Cart } from './pages/Cart';
// import { Product } from './pages/Product';

function AppRouter() {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path='/cart' element={<Cart />} /> */}

            <Route path='/' element={<Main />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/room' element={
                <Page 
                    imageURL={'https://www.president-mobility.ru/wp-content/uploads/2016/03/2-25.jpg'} 
                    title='Игровая комната'
                    subtitle='С няней и видео-наблюдением'
                >
                    <Room />
                </Page>
            } />
            <Route path='/cafe' element={
                <Page 
                    imageURL={'https://tillypad.ru/data/storage/O6T3HAhx/andy_falconer_dwQRixazu9I_unsplash.jpg'} 
                    title='Атмосферная кофейня'
                    subtitle='Меню'
                >
                    <Menu />
                </Page>} />
            <Route path='/party' element={
                <Page 
                    imageURL={'https://1place.su/ru/blog/wp-content/uploads/2018/05/post30.jpg'} 
                    title='Проведение праздников'
                    subtitle='и многое другое'
                >
                    <Party />
                </Page>} />
            
        </Routes>
    );
  }
          
  export default AppRouter;