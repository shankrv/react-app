import { Component } from 'react';

import classes from './User.module.css';

// Class-based Component
class User extends Component {
  componentWillUnmount() {
    console.log('User Component will unmount now.');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Functional Component
// const User = (props) => <li className={classes.user}>{props.name}</li>;

export default User;
