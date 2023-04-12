import classes from './Task.module.css';

const Task = (props) => <li className={classes.task}>{props.children}</li>;

export default Task;
