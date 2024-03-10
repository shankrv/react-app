import './App.css';
import reactAtomIcon from './assets/react-atom-icon.png';
import { CORE_CONCEPTS } from './data';

const description = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactAtomIcon} alt='react-atom-icon' />
      <h1>React Essentials</h1>
      <p>{description[getRandomInt(2)]} React concepts we will need for almost any app to build!</p>
    </header>
  );
}

function CoreConcept({ title, image, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
