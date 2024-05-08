import { useContext } from 'react';
import Button from './Interface/Button';
import CartContext from '../context/Cart';
import ProgressContext from '../context/Progress';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(ProgressContext);

  const count = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

  function showCart() {
    progressCtx.showCart();
  }

  return (
    <header id='main-header'>
      <div id='title'>
        <img src='assets/food-logo.jpg' alt='food-order' height='72' width='72' />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button isText onClick={showCart}>
          Cart ({count})
        </Button>
      </nav>
    </header>
  );
}
