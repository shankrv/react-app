import classes from './MealItem.module.css';

import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.desc}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
};

export default MealItem;
