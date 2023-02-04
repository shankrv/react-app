import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const submitHandler = (expense) => {
    props.onNewExpense({ id: props.count + 1, ...expense });
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onFormSubmit={submitHandler} />
    </div>
  );
}

export default NewExpense;
