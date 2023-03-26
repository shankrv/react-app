import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const overlayElem = document.getElementById('overlay');
const backdropElem = document.getElementById('backdrop');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, backdropElem)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlayElem)}
    </React.Fragment>
  );
};

export default Modal;
