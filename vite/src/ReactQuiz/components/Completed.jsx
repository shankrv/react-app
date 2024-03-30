import QUESTIONS from '../questions';

export default function Completed({ answers }) {
  const result = answers.reduce(
    (acc, ans, ind) => {
      if (ans === null) acc.skipped++;
      else if (ans === QUESTIONS[ind].answers[0]) acc.correct++;
      else acc.incorrect++;
      return acc;
    },
    { skipped: 0, correct: 0, incorrect: 0 }
  );
  const percentage = {
    skipped: Math.round((result.skipped / answers.length) * 100),
    correct: Math.round((result.correct / answers.length) * 100),
    incorrect: Math.round((result.incorrect / answers.length) * 100),
  };
  return (
    <div id='summary'>
      <img src='../assets/quiz-complete.png' alt='trophy-icon' />
      <h2>Completed!</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{percentage.skipped}%</span>
          <span className='text'>Skipped</span>
        </p>
        <p>
          <span className='number'>{percentage.correct}%</span>
          <span className='text'>Correct</span>
        </p>
        <p>
          <span className='number'>{percentage.incorrect}%</span>
          <span className='text'>Incorrect</span>
        </p>
      </div>
      <ol>
        {answers.map((ans, ind) => {
          const question = QUESTIONS[ind];
          let cssClass = 'user-answer';
          if (ans === null) cssClass += ' skipped';
          else cssClass += ans === question.answers[0] ? ' correct' : ' incorrect';
          return (
            <li key={ind}>
              <h3>{ind + 1}</h3>
              <p className='question'>{question.text}</p>
              <p className={cssClass}>{ans ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
