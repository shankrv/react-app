import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [hideForm, setFormHide] = useState(true);
  const submitHandler = (expense) => {
    props.onNewExpense({ id: 'E-' + Number(props.count + 1), ...expense });
    setFormHide(true);
  };
  const cancelHandler = () => {
    setFormHide(true);
  };
  const clickHandler = () => {
    setFormHide(false);
  };
  return (
    <div className='new-expense'>
      {hideForm ? (
        <button onClick={clickHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onFormSubmit={submitHandler} onCancel={cancelHandler} />
      )}
    </div>
  );
}

export default NewExpense;
