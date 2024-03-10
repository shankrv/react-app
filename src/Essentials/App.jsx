import './App.css';
import reactAtomIcon from './assets/react-atom-icon.png';

function Header() {
  return (
    <header>
      <img src={reactAtomIcon} alt='react-atom-icon' />
      <h1>React Essentials</h1>
      <p>Fundamental React concepts we will need for almost any app to build!</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
