import { useContext } from 'react';
import { currency } from '../util/format';
import Button from './Interface/Button';
import CartContext from '../context/Cart';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function addToCart() {
    cartCtx.add(meal);
  }

  return (
    <li className='meal-item'>
      <article>
        <img src={'http://localhost:3000/' + meal.image} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className='meal-meal-item-price'>{currency.format(meal.price)}</p>
          <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-item-actions'>
          <Button onClick={addToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
