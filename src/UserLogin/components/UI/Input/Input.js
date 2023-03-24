import { forwardRef, useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = (props, ref) => {
  const inputRef = useRef();

  // function to expose outside
  const focus = () => inputRef.current.focus();

  useImperativeHandle(ref, () => {
    return { focus: focus };
  });

  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default forwardRef(Input);
