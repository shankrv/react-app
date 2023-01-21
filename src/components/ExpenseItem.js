import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>January 18th 2023</div>
      <div className="expense-item__description">
        <h3>Rent</h3>
        <div className="expense-item__price">₹10,000.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
