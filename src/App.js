import './App.css';
import Count from './components/Count';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';

function App() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Count count={count} />
        </p>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={increment}>Прибавить</Button>
          <Button variant="contained" onClick={decrement}>Отнять</Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
