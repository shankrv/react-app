import { useRef } from 'react';

export default function Answers({ answers, answered, selectedAnswer, onSelectAnswer }) {
  const shuffleAns = useRef();
  if (!shuffleAns.current) shuffleAns.current = [...answers].sort(() => Math.random() - 0.5);

  return (
    <ul id='answers'>
      {shuffleAns.current.map((ans, ind) => {
        let cssClass = '';
        if (answered === 'answered' && selectedAnswer === ans) cssClass = 'selected';
        if (['correct', 'incorrect'].includes(answered) && selectedAnswer === ans) cssClass = answered;
        return (
          <li key={ind} className='answer'>
            <button className={cssClass} onClick={() => onSelectAnswer(ans)} disabled={answered !== ''}>
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
