import { useEffect, useState } from 'react';

export default function Timer({ timeout, mode, onTimeout }) {
  const [timeRemain, setTimeRemain] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemain((prev) => prev - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <progress id='question-time' value={timeRemain} max={timeout} className={mode} />;
}
