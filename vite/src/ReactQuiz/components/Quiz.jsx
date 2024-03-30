import { useCallback, useState } from 'react';

import Question from './Question';
import QUESTIONS from '../questions';
import Completed from './Completed';

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQues = QUESTIONS[userAnswer.length];
  const isComplete = userAnswer.length === QUESTIONS.length;

  const selectAnswer = useCallback(function selectAnswer(selected) {
    console.log('SelectedAnswer: ', selected);
    setUserAnswer((prev) => [...prev, selected]);
  }, []);

  const skipAnswer = useCallback(() => selectAnswer(null), [selectAnswer]);

  if (isComplete) return <Completed answers={userAnswer} />;
  return (
    <div id='quiz'>
      <Question key={activeQues.id} question={activeQues} onSelectAnswer={selectAnswer} onSkipAnswer={skipAnswer} />
    </div>
  );
}
