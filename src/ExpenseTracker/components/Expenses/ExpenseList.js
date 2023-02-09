import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
  if (!props.expenses.length) {
    return <h3 className='expenses-list__fallback'>No expense found.</h3>;
  } else {
    return (
      <ul className='expenses-list'>
        {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
        ))}
      </ul>
    );
  }
}

export default ExpenseList;
