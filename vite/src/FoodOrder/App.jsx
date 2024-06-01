import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
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
        <Checkout />
        <Meals />
      </CartContextProvider>
    </ProgressContextProvider>
  );
}

export default App;
