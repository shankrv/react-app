import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const onShowCart = () => setShowCart(true);
  const onHideCart = () => setShowCart(false);

  return (
    <Fragment>
      <Header onShowCart={onShowCart} />
      {showCart && <Cart onClose={onHideCart} />}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
