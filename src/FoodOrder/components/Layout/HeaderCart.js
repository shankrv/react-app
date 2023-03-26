import classes from './HeaderCart.module.css';

import CartIcon from '../Cart/CartIcon';

const HeaderCart = (props) => {
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCart;
