import { useContext, useEffect, useState } from 'react';

import classes from './HeaderCart.module.css';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../context/cart';

const HeaderCart = (props) => {
  const context = useContext(CartContext);
  const itemsCount = context.items.length;

  const [animation, setAnimation] = useState(false);

  const btnClasses = `${classes.button} ${animation ? classes.bump : ''}`;

  useEffect(() => {
    if (!context.items.length) return;
    setAnimation(true);
    const timer = setTimeout(() => setAnimation(false), 300); // 300ms animation
    return () => clearTimeout(timer);
  }, [context.items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCart;
