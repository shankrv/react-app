import './ExpenseItem.css';

function ExpenseItem() {
  const expenseItem = {
    date: new Date(2023, 0, 18).toISOString(),
    title: 'Rent',
    price: '10,000.00',
  };
  return (
    <div className="expense-item">
      <div>{expenseItem.date}</div>
      <div className="expense-item__description">
        <h3>{expenseItem.title}</h3>
        <div className="expense-item__price">₹{expenseItem.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
