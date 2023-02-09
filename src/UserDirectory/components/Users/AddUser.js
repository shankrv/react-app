import Card from '../General/Card';
import Button from '../General/Button';
import classes from './AddUser.module.css';
import { useState } from 'react';

function AddUser(props) {
  const [data, setData] = useState({ name: '', age: '' });

  const submitHandler = (event) => {
    event.preventDefault();
    if (!data.name.trim().length || !data.age) return;
    if (data.age < 1) return;
    props.onAddUser(data);
    setData({ name: '', age: '' });
  };

  const nameChangeHandler = (event) => {
    setData((prevData) => {
      return { ...prevData, name: event.target.value };
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
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' value={data.name} onChange={nameChangeHandler}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={data.age} onChange={ageChangeHandler}></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
