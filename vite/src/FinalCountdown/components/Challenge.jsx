import { useRef, useState } from 'react';

import Result from './Result';

export default function Challenge({ title, timeLimit }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemain, setTimeRemain] = useState(timeLimit * 1000);

  const isActive = timeRemain > 0 && timeRemain < timeLimit * 1000;

  if (timeRemain <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function startChallenge() {
    timer.current = setInterval(() => setTimeRemain((prevRemain) => prevRemain - 10), 10);
  }

  function stopChallenge() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function resetChallenge() {
    setTimeRemain(timeLimit * 1000);
  }

  return (
    <>
      <Result ref={dialog} timeRemain={timeRemain} timeLimit={timeLimit} resetChallenge={resetChallenge} />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>{timeLimit} second(s)</p>
        <p>
          <button onClick={!isActive ? startChallenge : stopChallenge}>{!isActive ? 'Start' : 'Stop'} Challenge</button>
        </p>
        <p className={isActive ? 'active' : undefined}>{isActive ? 'Time is running...' : 'Timer stopped'}</p>
      </section>
    </>
  );
}
