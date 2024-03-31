import { useState } from 'react';

function HistoryItem({ count }) {
  console.log('<HistoryItem /> rendered');
  const [selected, setSelected] = useState(false);

  function clickHandler() {
    setSelected((prev) => !prev);
  }

  return (
    <li onClick={clickHandler} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

export default function History({ history }) {
  console.log('<History /> rendered');
  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
}
