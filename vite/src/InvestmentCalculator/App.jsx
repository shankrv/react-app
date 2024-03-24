import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [investment, setInvestment] = useState({ initial: 10000, annual: 2500, rateOfReturn: 6, duration: 10 });

  const isValid = investment.duration > 0;

  function changeHandler(input, value) {
    setInvestment((prev) => ({ ...prev, [input]: value }));
  }

  return (
    <>
      <Header />
      <UserInput investment={investment} onChange={changeHandler} />
      {isValid ? <Results investment={investment} /> : <p className='center'>Please enter a valid duration.</p>}
    </>
  );
}

export default App;
