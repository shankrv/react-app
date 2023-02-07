import './CourseInput.css';
import Button from './../../General/Button';
import { useState } from 'react';

const CourseInput = (props) => {
  const [isValid, setValidity] = useState(true);
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length) setValidity(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredValue.trim().length) return setValidity(false);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
