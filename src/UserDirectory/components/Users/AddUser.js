import Card from '../General/Card';
import Button from '../General/Button';
import ErrorModal from '../General/ErrorModal';
// import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';
import { Fragment, useRef, useState } from 'react';

function AddUser(props) {
  const [nameRef, ageRef] = [useRef(), useRef()];
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = { name: nameRef.current.value, age: Number(ageRef.current.value) };
    if (!data.name.trim().length || !data.age) {
      setError({ title: 'Validation Error', message: 'Please enter a valid name and age.' });
      return;
    }
    if (data.age < 1) {
      setError({ title: 'Validation Error', message: 'Age must be greater than 0.' });
      return;
    }
    props.onAddUser(data);
    event.target.reset();
  };

  const errorHandler = () => setError(null);

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' ref={nameRef}></input>
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageRef}></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;
