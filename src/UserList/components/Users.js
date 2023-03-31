import { Component } from 'react';

import classes from './Users.module.css';

import User from './User';

const USERS = [
  { id: 'U-1', name: 'John' },
  { id: 'U-2', name: 'Michael' },
  { id: 'U-3', name: 'David' },
];

const usersList = (
  <ul>
    {USERS.map((user) => (
      <User key={user.id} name={user.name} />
    ))}
  </ul>
);

// Class-based Component
class Users extends Component {
  constructor() {
    super();
    this.state = { showUsers: false };
  }

  toggleHandler() {
    this.setState((currentState) => {
      return { showUsers: !currentState.showUsers };
    });
  }

  render() {
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
