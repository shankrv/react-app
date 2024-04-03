import { memo, useCallback, useMemo, useState } from 'react';

import IconButton from '../Interface/IconButton.jsx';
import PlusIcon from '../Interface/Icons/PlusIcon.jsx';
import MinusIcon from '../Interface/Icons/MinusIcon.jsx';
import Output from './Output.jsx';

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
  const [counter, setCounter] = useState(initialCount);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prev) => prev - 1);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prev) => prev + 1);
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
        <Output value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
});

export default Counter;
