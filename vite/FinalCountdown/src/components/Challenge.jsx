import { useRef, useState } from 'react';

export default function Challenge({ title, timeLimit }) {
  const timer = useRef();
  const [hasStarted, setStarted] = useState(false);
  const [hasExpired, setExpired] = useState(false);

  function startChallenge() {
    setStarted(true);
    timer.current = setTimeout(() => setExpired(true), timeLimit * 1000);
  }

  function stopChallenge() {
    setStarted(false);
    clearTimeout(timer.current);
  }

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {hasExpired && <p>Expired!</p>}
      <p className='challenge-time'>{timeLimit} second(s)</p>
      <p>
        <button onClick={!hasStarted ? startChallenge : stopChallenge}>
          {!hasStarted ? 'Start' : 'Stop'} Challenge
        </button>
      </p>
      <p className={hasStarted ? 'active' : undefined}>{hasStarted ? 'Time is running...' : 'Timer stopped'}</p>
    </section>
  );
}
