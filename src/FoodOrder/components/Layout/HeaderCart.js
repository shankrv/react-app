import classes from './HeaderCart.module.css';

import CartIcon from '../Cart/CartIcon';

const HeaderCart = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCart;
