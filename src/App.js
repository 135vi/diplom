import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        
      </div>
    </Provider>
  );
}

export default App;