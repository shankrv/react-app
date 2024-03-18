import { useState } from 'react';

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ active, onSelectSquare }) {
  const [gameBoard, setGameBoard] = useState(initGameBoard);

  function selectSquareHandler(row, col) {
    setGameBoard((prev) => {
      const current = [...prev.map((arr) => [...arr])];
      current[row][col] = active;
      return current;
    });
    onSelectSquare();
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectSquareHandler(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
