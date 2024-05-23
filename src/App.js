import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Contacts />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;