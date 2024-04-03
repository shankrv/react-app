import { useState } from 'react';

function Item({ count }) {
  console.log('<Item /> rendered');
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
      {history.map((count) => (
        <Item key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
