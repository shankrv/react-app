import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  console.log('DemoList Component');
  const sortedList = useMemo(() => {
    console.log('Sorted List');
    return props.items.sort((a, b) => a - b);
  }, [props.items]);
  const listItems = sortedList.map((item) => <li key={item}>{item}</li>);

  return (
    <div className={classes.list}>
      <h3>{props.title}</h3>
      <ul>{listItems}</ul>
    </div>
  );
};

export default React.memo(DemoList);
