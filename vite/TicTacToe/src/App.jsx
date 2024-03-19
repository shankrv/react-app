import { useState } from 'react';

import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import GameLog from './components/GameLog';
import GameOver from './components/GameOver';

import { BOARD, WINNING } from './combinations';

function getActivePlayer(turns) {
  if (turns.length) return turns[0].player === 'X' ? 'O' : 'X';
  else return 'X';
}

function getGameBoard(turns) {
  // deep copy
  const gameBoard = [...BOARD.map((row) => [...row])];
  // derived state from props
  for (const turn of turns) {
    const { player, square } = turn;
    gameBoard[square.row][square.col] = player;
  }
  return gameBoard;
}

function getWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING) {
    const square = {
      first: gameBoard[combination[0].row][combination[0].column],
      second: gameBoard[combination[1].row][combination[1].column],
      third: gameBoard[combination[2].row][combination[2].column],
    };
    if (square.first && square.first === square.second && square.first === square.third) winner = players[square.first];
  }
  return winner;
}

function App() {
  const [turns, setTurns] = useState([]);
  const [players, setPlayers] = useState({ X: 'Player-1', O: 'Player-2' });
  const active = getActivePlayer(turns);
  const gameBoard = getGameBoard(turns);
  const game = { winner: getWinner(gameBoard, players) };
  game.draw = turns.length === 9 && !game.winner;

  function selectSquareHandler(row, col) {
    setTurns((prevTurn) => [{ player: getActivePlayer(prevTurn), square: { row, col } }, ...prevTurn]);
  }

  function restartHandler() {
    setTurns([]);
  }

  function nameChangeHandler(symbol, name) {
    setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: name }));
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name={players.X} symbol='X' isActive={active === 'X'} onNameChange={nameChangeHandler} />
          <Player name={players.O} symbol='O' isActive={active === 'O'} onNameChange={nameChangeHandler} />
        </ol>
        {(game.draw || game.winner) && <GameOver winner={game.winner} onRematch={restartHandler} />}
        <GameBoard gameBoard={gameBoard} onSelectSquare={selectSquareHandler} />
      </div>
      <GameLog turns={turns} />
    </main>
  );
}

export default App;
