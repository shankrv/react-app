import { useContext } from 'react';
import Modal from './Interface/Modal';
import CartContext from '../context/Cart';
import { currency } from '../util/format';
import Button from './Interface/Button';
import ProgressContext from '../context/Progress';
import CartItem from './CartItem';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(ProgressContext);

  const total = cartCtx.items.reduce((total, item) => total + item.price * item.quantity, 0);

  function hideCart() {
    progressCtx.hide();
  }

  function showCheckout() {
    progressCtx.showCheckout();
  }

  return (
    <Modal
      className='cart'
      open={progressCtx.progress === 'cart'}
      onClose={progressCtx.progress === 'cart' ? hideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.add(item)}
            onDecrease={() => cartCtx.remove(item.id)}
          />
        ))}
      </ul>
      <p className='cart-total'>{currency.format(total)}</p>
      <p className='modal-actions'>
        <Button isText onClick={hideCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button onClick={showCheckout}>Checkout</Button>}
      </p>
    </Modal>
  );
}
