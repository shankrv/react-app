import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import React from 'react';
import ReactDom from 'react-dom';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function Modal(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Close</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop'))}
      {ReactDom.createPortal(
        <Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById('overlay')
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
