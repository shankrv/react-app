import { useState } from 'react';

import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import GameLog from './components/GameLog';

function App() {
  const [turns, setTurns] = useState([]);
  const [active, setActive] = useState('X');

  function selectSquareHandler(row, col) {
    setActive((current) => (current === 'X' ? '0' : 'X'));
    setTurns((prevTurn) => {
      const player = prevTurn.length ? (prevTurn[0].player === 'X' ? 'O' : 'X') : 'X';
      return [{ player, square: { row, col } }, ...prevTurn];
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player - 1' symbol='X' isActive={active === 'X'} />
          <Player name='Player - 2' symbol='0' isActive={active === '0'} />
        </ol>
        <GameBoard turns={turns} onSelectSquare={selectSquareHandler} />
      </div>
      <GameLog turns={turns} />
    </main>
  );
}

export default App;
