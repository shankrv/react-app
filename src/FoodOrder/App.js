import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const onShowCart = () => setShowCart(true);
  const onHideCart = () => setShowCart(false);

  return (
    <CartProvider>
      <Header onShowCart={onShowCart} />
      {showCart && <Cart onClose={onHideCart} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
