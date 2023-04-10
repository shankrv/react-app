import Card from './Card';

import useCounter from '../hooks/useCounter';

const BackwardCounter = () => {
  const counter = useCounter(0);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
