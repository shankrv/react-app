import { useState } from 'react';

import './App.css';

import Button from './components/UI/Button';
import Demo from './components/Demo/Demo';

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App Component');

  const toggleHandler = () => setShowParagraph((currentState) => !currentState);

  return (
    <div className='app'>
      <h1>Optimization</h1>
      <Demo show={showParagraph} />
      <Button onClick={toggleHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default App;
