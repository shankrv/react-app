import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { date: new Date(2023, 0, 18), title: 'Rent', amount: 10000 },
    { date: new Date(2023, 0, 19), title: 'Maintenance', amount: 1500 },
    { date: new Date(2023, 0, 20), title: 'Electric Bill', amount: 250 },
    { date: new Date(2023, 0, 21), title: 'Internet', amount: 675 },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
