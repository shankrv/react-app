import { forwardRef } from 'react';

const Result = forwardRef(function Result({ result, timeLimit }, ref) {
  return (
    <dialog ref={ref} className='result-modal'>
      <h2>{result}</h2>
      <p>
        Target time was <strong>{timeLimit}</strong> seconds.
      </p>
      <p>
        Challenge completed with <strong>X</strong> seconds left.
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
