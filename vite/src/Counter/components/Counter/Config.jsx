import { useState } from 'react';

export default function Config({ onSetCounter }) {
  console.log('<Config /> rendered');
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onSetCounter(enteredNumber);
    setEnteredNumber(0);
  }
  return (
    <section id='configure-counter'>
      <h2>Set Counter</h2>
      <input type='number' onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
