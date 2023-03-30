import classes from './User.module.css';

const User = (props) => <li className={classes.user}>{props.name}</li>;

export default User;
