import './ExpenseDate.css';

function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-IN', { month: 'long' });
  const date = props.date.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__date">{date}</div>
    </div>
  );
}

export default ExpenseDate;
