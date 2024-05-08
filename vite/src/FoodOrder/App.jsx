import './App.css';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './context/Cart';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
