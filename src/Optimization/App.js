import { useCallback, useState } from 'react';

import './App.css';

import Button from './components/UI/Button';
import Demo from './components/Demo/Demo';

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [enableToggle, setEnableToggle] = useState(false);

  console.log('App Component');

  const toggleHandler = useCallback(() => {
    if (enableToggle) setShowParagraph((currentState) => !currentState);
  }, [enableToggle]);

  const enableToggleHandler = () => setEnableToggle(true);

  return (
    <div className='app'>
      <h1>Optimization</h1>
      <Demo show={showParagraph} />
      <Button onClick={enableToggleHandler}>Enable Toggling</Button>
      <Button onClick={toggleHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default App;
