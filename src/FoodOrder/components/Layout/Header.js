import { Fragment } from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='a table of delicious meals!' />
      </div>
    </Fragment>
  );
};

export default Header;
