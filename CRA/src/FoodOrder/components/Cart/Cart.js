import { useContext } from 'react';

import classes from './Cart.module.css';

import Modal from '../General/Modal';
import CartContext from '../../context/cart';
import CartItem from './CartItem';

const Cart = (props) => {
  const context = useContext(CartContext);
  const total = `$${context.total.toFixed(2)}`;
  const hasItems = Boolean(context.items.length);

  const addItem = (item) => context.addItem({ ...item, qty: 1 });
  const removeItem = (id) => context.removeItem(id);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          qty={item.qty}
          price={item.price}
          onAdd={addItem.bind(null, item)}
          onRemove={removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
