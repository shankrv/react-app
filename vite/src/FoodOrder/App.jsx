import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './context/Cart';
import { ProgressContextProvider } from './context/Progress';

function App() {
  return (
    <ProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Cart />
        <Meals />
      </CartContextProvider>
    </ProgressContextProvider>
  );
}

export default App;
