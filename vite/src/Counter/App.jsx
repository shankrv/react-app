import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter/Counter';
import Config from './components/Counter/Config';

function App() {
  console.log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function setCounter(count) {
    setChosenCount(count);
  }

  return (
    <>
      <Header />
      <main>
        <Config onSetCounter={setCounter} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
