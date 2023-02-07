import './CourseInput.css';
import Button from './../../General/Button';
import { useState } from 'react';
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? '#c92a2a' : '#343a40')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background: ${(props) => (props.invalid ? '#fff5f5' : '#f8f9fa')};
  }

  & input:focus {
    outline: none;
    background: #f8f9fa;
    border-color: #343a40;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
