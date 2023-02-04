import './Expenses.css';
import Card from './../General/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
  const expenses = props.expenses;

  const [year, setYear] = useState(2020);

  const filterHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter year={year} onFilter={filterHandler} />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
      ))}
    </Card>
  );
}

export default Expenses;
