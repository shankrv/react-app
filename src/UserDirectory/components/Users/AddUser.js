import Card from '../General/Card';
import Button from '../General/Button';
import classes from './AddUser.module.css';

function AddUser() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'></input>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number'></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
