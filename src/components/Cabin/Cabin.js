import React from 'react';

/*--- fx-based comp ---*/

const Cabin = props => {

  // inline-styles
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid deepskyblue',
    padding: '8px'
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <p> cabin-loaded success </p>
      <button style={style} onClick={props.toggleState}> Switch Name </button>
    </div>
  );
};

export default Cabin;
