import { useState } from 'react';

import classes from './Users.module.css';

import User from './User';

const USERS = [
  { id: 'U-1', name: 'John' },
  { id: 'U-2', name: 'Michael' },
  { id: 'U-3', name: 'David' },
];

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

export default Users;
