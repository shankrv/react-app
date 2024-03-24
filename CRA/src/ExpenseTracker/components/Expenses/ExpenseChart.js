import Chart from '../Chart/Chart';

function ExpenseChart(props) {
  const data = [
    { id: 'M-1', label: 'Jan', value: 0 },
    { id: 'M-2', label: 'Feb', value: 0 },
    { id: 'M-3', label: 'Mar', value: 0 },
    { id: 'M-4', label: 'Apr', value: 0 },
    { id: 'M-5', label: 'May', value: 0 },
    { id: 'M-6', label: 'Jun', value: 0 },
    { id: 'M-7', label: 'Jul', value: 0 },
    { id: 'M-8', label: 'Aug', value: 0 },
    { id: 'M-9', label: 'Sep', value: 0 },
    { id: 'M-10', label: 'Oct', value: 0 },
    { id: 'M-11', label: 'Nov', value: 0 },
    { id: 'M-12', label: 'Dec', value: 0 },
  ];
  props.expenses.forEach((expense) => {
    const month = expense.date.getMonth();
    data[month].value += expense.amount;
  });
  return <Chart data={data} />;
}

export default ExpenseChart;
