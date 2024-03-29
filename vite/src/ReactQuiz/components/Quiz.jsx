import { useState } from 'react';

export default function Quiz() {
  const [activeQues, setActiveQues] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  return <p>Active Question</p>;
}
