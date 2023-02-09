import './Expenses.css';
import Card from './../General/Card';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
  const [year, setYear] = useState(2020);

  const filterHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const expenses = props.expenses.filter((expense) => year === expense.date.getFullYear());

  return (
    <Card className='expenses'>
      <ExpenseFilter year={year} onFilter={filterHandler} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </Card>
  );
}

export default Expenses;
