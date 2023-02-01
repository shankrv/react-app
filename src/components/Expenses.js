import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}></ExpenseItem>
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}></ExpenseItem>
    </Card>
  );
}

export default Expenses;