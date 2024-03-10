import './Header.css';
import reactAtomIcon from '../../assets/react-atom-icon.png';

const description = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactAtomIcon} alt='react-atom-icon' />
      <h1>React Essentials</h1>
      <p>{description[getRandomInt(2)]} React concepts we will need for almost any app to build!</p>
    </header>
  );
}
