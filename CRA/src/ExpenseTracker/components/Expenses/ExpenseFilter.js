import './ExpenseFilter.css';

function ExpenseFilter(props) {
  const onChangeHandler = (event) => {
    const year = Number(event.target.value);
    props.onFilter(year);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.year} onChange={onChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
