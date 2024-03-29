import { useEffect, useState } from 'react';

export default function Progress({ timer }) {
  const [timeRemains, setTimeRemains] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('set-interval:');
      setTimeRemains((prev) => prev - 10);
    }, 10);

    return () => {
      console.log('clear-interval:');
      clearInterval(interval);
    };
  }, []);
  return <progress value={timeRemains} max={timer} />;
}
