import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { date: new Date(2023, 0, 18), title: 'Rent', amount: 10000 },
    { date: new Date(2023, 0, 19), title: 'Maintenance', amount: 1500 },
    { date: new Date(2023, 0, 20), title: 'Electric Bill', amount: 250 },
    { date: new Date(2023, 0, 21), title: 'Internet', amount: 675 },
  ];
  return (
    <div>
      <h2>Create React App</h2>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}></ExpenseItem>
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}></ExpenseItem>
    </div>
  );
}

export default App;
