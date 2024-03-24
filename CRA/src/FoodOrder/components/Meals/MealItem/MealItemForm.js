import { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';

import Input from '../../General/Input';

const MealItemForm = (props) => {
  const qtyRef = useRef();
  const [isValidQty, setValidQty] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const qty = Number(qtyRef.current.value);
    if (qty < 1 || qty > 5) {
      setValidQty(false);
      return;
    }
    props.onAddToCart(qty);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={qtyRef}
        label='Qty.'
        input={{ id: 'qty_' + props.id, type: 'number', min: 1, max: 5, step: 1, defaultValue: 1 }}
      />
      <button>+ Add</button>
      {!isValidQty && <p>Please enter a valid quantity.</p>}
    </form>
  );
};

export default MealItemForm;
