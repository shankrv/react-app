import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');
  const [userInput, setUserInput] = useState({ title: '', amount: '', date: '' });

  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    setUserInput({ ...userInput, title: event.target.value });

    /* --- Latest State Guaranteed --- */
    // setUserInput((state) => {
    //   return { ...state, title: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    // setAmount(event.target.value);
    setUserInput({ ...userInput, amount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setUserInput({ ...userInput, date: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: userInput.title,
      amount: parseFloat(userInput.amount),
      date: new Date(userInput.date),
    };
    console.log(expense);

    setUserInput({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={userInput.title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={userInput.amount} min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={userInput.date} min='2020-01-01' max='2022-12-31' onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add New</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
