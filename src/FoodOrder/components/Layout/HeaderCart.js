import { useContext } from 'react';

import classes from './HeaderCart.module.css';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../context/cart';

const HeaderCart = (props) => {
  const context = useContext(CartContext);
  const itemsCount = context.items.length;
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCart;
