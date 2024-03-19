import { useState } from 'react';

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function clickHandler() {
    setEditing((editing) => !editing);
    isEditing && onNameChange(symbol, playerName);
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
