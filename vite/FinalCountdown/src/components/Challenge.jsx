import { useRef, useState } from 'react';

import Result from './Result';

export default function Challenge({ title, timeLimit }) {
  const timer = useRef();
  const dialog = useRef();
  const [hasStarted, setStarted] = useState(false);
  const [hasExpired, setExpired] = useState(false);

  function startChallenge() {
    setStarted(true);
    timer.current = setTimeout(() => {
      setExpired(true);
      dialog.current.showModal();
    }, timeLimit * 1000);
  }

  function stopChallenge() {
    setStarted(false);
    clearTimeout(timer.current);
  }

  return (
    <>
      <Result ref={dialog} result='Expired!' timeLimit={timeLimit} />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>{timeLimit} second(s)</p>
        <p>
          <button onClick={!hasStarted ? startChallenge : stopChallenge}>
            {!hasStarted ? 'Start' : 'Stop'} Challenge
          </button>
        </p>
        <p className={hasStarted ? 'active' : undefined}>{hasStarted ? 'Time is running...' : 'Timer stopped'}</p>
      </section>
    </>
  );
}
