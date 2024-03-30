import { useState } from 'react';

import Timer from './Timer';
import Answers from './Answers';

export default function Question({ question, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({ selected: '', isCorrect: null });

  console.log('Question: ', question.id);

  function selectAnswer(selected) {
    setAnswer({ selected: selected, isCorrect: null });
    setTimeout(() => {
      setAnswer({ selected: selected, isCorrect: question.answers[0] === selected });
      setTimeout(() => onSelectAnswer(selected), 2000);
    }, 1000);
  }

  let timer = 10000;
  if (answer.selected) timer = 1000;
  if (answer.isCorrect !== null) timer = 2000;

  let answered = '';
  if (answer.selected && answer.isCorrect !== null) answered = answer.isCorrect ? 'correct' : 'incorrect';
  else if (answer.selected) answered = 'answered';

  return (
    <div id='question'>
      <Timer key={timer} timeout={timer} mode={answered} onTimeout={answer.selected === '' ? onSkipAnswer : null} />
      <h2>{question.text}</h2>
      <Answers
        answers={question.answers}
        answered={answered}
        selectedAnswer={answer.selected}
        onSelectAnswer={selectAnswer}
      />
    </div>
  );
}
