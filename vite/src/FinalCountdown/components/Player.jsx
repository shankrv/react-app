import { useRef, useState } from 'react';

export default function Player() {
  const nameInput = useRef();
  const [player, setPlayer] = useState('');

  function clickHandler() {
    setPlayer(nameInput.current.value);
  }

  return (
    <section id='player'>
      <h2>Welcome {player ?? ''}!</h2>
      <p>
        <input type='text' ref={nameInput} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
