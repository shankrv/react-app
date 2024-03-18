import { useState } from 'react';

import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  const [active, setActive] = useState('X');

  function selectSquareHandler() {
    setActive((current) => (current === 'X' ? '0' : 'X'));
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player - 1' symbol='X' isActive={active === 'X'} />
          <Player name='Player - 2' symbol='0' isActive={active === '0'} />
        </ol>
        <GameBoard active={active} onSelectSquare={selectSquareHandler} />
      </div>
      LOG
    </main>
  );
}

export default App;
