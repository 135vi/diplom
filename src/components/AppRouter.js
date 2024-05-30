import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Contacts from './Contacts';
import Cards from './Cards'

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
            <Route path='/cards' element={<Cards />} />
            
        </Routes>
    );
  }
          
  export default AppRouter;