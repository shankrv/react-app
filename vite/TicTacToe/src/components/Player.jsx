import { useState } from 'react';

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function clickHandler() {
    setEditing((editing) => !editing);
  }

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : null}>
      <span className='player'>
        {isEditing ? (
          <input type='text' required value={playerName} onChange={changeHandler} />
        ) : (
          <span className='player-name'>{playerName}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
