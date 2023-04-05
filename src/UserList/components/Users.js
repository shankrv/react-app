import { Component } from 'react';

import classes from './Users.module.css';

import User from './User';

// Class-based Component
class Users extends Component {
  constructor() {
    super();
    this.state = { showUsers: true };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) throw new Error('No users found.');
  }

  toggleHandler() {
    this.setState((currentState) => {
      return { showUsers: !currentState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {this.state.showUsers && usersList}
        <button onClick={this.toggleHandler.bind(this)}>{this.state.showUsers ? 'Hide' : 'Show'} Users</button>
      </div>
    );
  }
}

// Functional Component
/*
const Users = (props) => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleHandler = () => setShowUsers((currentState) => !currentState);

  const usersList = (
    <ul>
      {USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      {showUsers && usersList}
      <button onClick={toggleHandler}>{showUsers ? 'Hide' : 'Show'} Users</button>
    </div>
  );
};
*/

export default Users;
