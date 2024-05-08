import { currency } from '../util/format';

export default function CartItem({ name, price, quantity, onIncrease, onDecrease }) {
  return (
    <li className='cart-item'>
      <p>
        {name} - {quantity} x {currency.format(price)}
      </p>
      <p className='cart-item-actions'>
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
