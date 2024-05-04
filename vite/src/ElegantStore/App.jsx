import './App.css';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import CartContextProvider from './context/Cart.jsx';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
