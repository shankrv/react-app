import { Fragment } from 'react';

import Summary from './Summary';
import Available from './Available';

const Meals = () => {
  return (
    <Fragment>
      <Summary />
      <Available />
    </Fragment>
  );
};

export default Meals;
