import classes from './Button.module.css';

function Button(props) {
  return (
    <button className={classes.button} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
