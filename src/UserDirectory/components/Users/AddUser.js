import Card from '../General/Card';
import Button from '../General/Button';
import classes from './AddUser.module.css';
import { useState } from 'react';

function AddUser() {
  const [data, setData] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const userChangeHandler = (event) => {
    setData((prevData) => {
      return { ...prevData, username: event.target.value };
    });
  };

  const ageChangeHandler = (event) => {
    setData((prevData) => {
      return { ...prevData, age: Number(event.target.value) };
    });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={userChangeHandler}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' onChange={ageChangeHandler}></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
