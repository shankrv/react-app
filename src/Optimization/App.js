import { useCallback, useMemo, useState } from 'react';

import './App.css';

import Button from './components/UI/Button';
import Demo from './components/Demo/Demo';
import DemoList from './components/Demo/DemoList';

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [enableToggle, setEnableToggle] = useState(false);
  const [title, setTitle] = useState('List Items');

  console.log('App Component');

  const toggleHandler = useCallback(() => {
    if (enableToggle) setShowParagraph((currentState) => !currentState);
  }, [enableToggle]);

  const enableToggleHandler = () => setEnableToggle(true);

  const titleHandler = useCallback(() => setTitle('New List Items'), []);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className='app'>
      <h1>Optimization</h1>
      <Demo show={showParagraph} />
      <Button onClick={enableToggleHandler}>Enable Toggling</Button>
      <Button onClick={toggleHandler}>Toggle Paragraph</Button>
      <DemoList title={title} items={listItems} />
      <Button onClick={titleHandler}>Change List</Button>
    </div>
  );
};

export default App;
