import { useEffect, useState } from 'react';

const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCounter((prevCount) => (forward ? prevCount + 1 : prevCount - 1)), 1000);
    return () => clearInterval(interval);
  }, [forward]);

  return counter;
};

export default useCounter;
