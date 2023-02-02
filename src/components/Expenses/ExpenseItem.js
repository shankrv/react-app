import './ExpenseItem.css';
import Card from './../General/Card';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(title + ' - Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3>{title}</h3>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
}

export default ExpenseItem;
