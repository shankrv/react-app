import './ExpenseItem.css';
import Card from './../General/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h3>{props.title}</h3>
        <div className='expense-item__price'>₹{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
