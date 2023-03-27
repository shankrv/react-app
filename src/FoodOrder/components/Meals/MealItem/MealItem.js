import { useContext } from 'react';

import classes from './MealItem.module.css';

import MealItemForm from './MealItemForm';
import CartContext from '../../../context/cart';

const MealItem = (props) => {
  const context = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCart = (qty) => context.addItem({ id: props.id, name: props.name, qty, price: props.price });

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.desc}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCart} />
    </li>
  );
};

export default MealItem;
