import { useContext } from 'react';
import Button from './Interface/Button';
import CartContext from '../context/Cart';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const count = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
  return (
    <header id='main-header'>
      <div id='title'>
        <img src='assets/food-logo.jpg' alt='food-order' height='72' width='72' />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button isText>Cart ({count})</Button>
      </nav>
    </header>
  );
}
