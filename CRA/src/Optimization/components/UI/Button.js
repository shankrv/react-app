import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button Component');
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
