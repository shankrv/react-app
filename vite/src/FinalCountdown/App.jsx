import './App.css';
import Player from './components/Player';
import Challenge from './components/Challenge';

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <Challenge title='Easy' timeLimit={1} />
        <Challenge title='Medium' timeLimit={5} />
        <Challenge title='Hard' timeLimit={10} />
        <Challenge title='Pro' timeLimit={15} />
      </div>
    </>
  );
}

export default App;
