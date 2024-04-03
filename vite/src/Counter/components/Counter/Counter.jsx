import { memo, useCallback, useMemo, useState } from 'react';

import IconButton from '../Interface/IconButton.jsx';
import PlusIcon from '../Interface/Icons/PlusIcon.jsx';
import MinusIcon from '../Interface/Icons/MinusIcon.jsx';
import Output from './Output.jsx';
import History from './History.jsx';

function isPrime(number) {
  if (number <= 1) return false;

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) {
  console.log('<Counter /> rendered');
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);
  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([{ id: Math.random() * 1000, value: initialCount }]);

  // useEffect(() => {
  //   setCounterChanges([{ id: Math.random() * 1000, value: initialCount }]);
  // }, [initialCount]);

  const currentCounter = counterChanges.reduce((prev, change) => prev + change.value, 0);

  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prev) => prev - 1);
    setCounterChanges((prev) => [{ id: Math.random() * 1000, value: -1 }, ...prev]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prev) => prev + 1);
    setCounterChanges((prev) => [{ id: Math.random() * 1000, value: 1 }, ...prev]);
  }, []);

  return (
    <section className='counter'>
      <p className='counter-info'>
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <Output value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <History history={counterChanges} />
    </section>
  );
});

export default Counter;
