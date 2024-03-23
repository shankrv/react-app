import { forwardRef, useImperativeHandle, useRef } from 'react';

const Result = forwardRef(function Result({ timeRemain, timeLimit, resetChallenge }, ref) {
  const dialog = useRef();

  const isExpired = timeRemain <= 0;
  const remaining = (timeRemain / 1000).toFixed(2);
  const result = Math.round((1 - timeRemain / (timeLimit * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className='result-modal' onClose={resetChallenge}>
      <h2>{isExpired ? 'Expired!' : 'Score: ' + result}</h2>
      <p>
        Target time was <strong>{timeLimit}</strong> seconds.
      </p>
      <p>
        Challenge {isExpired ? 'expired' : 'completed'} with <strong>{remaining}</strong> seconds left.
      </p>
      <form method='dialog' onSubmit={resetChallenge}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
