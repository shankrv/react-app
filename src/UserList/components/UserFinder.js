import { Fragment, useEffect, useState } from 'react';

import classes from './UserFinder.module.css';

import Users from './Users';

const USERS = [
  { id: 'U-1', name: 'John' },
  { id: 'U-2', name: 'Michael' },
  { id: 'U-3', name: 'David' },
];

const UserFinder = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(USERS);

  useEffect(() => setFilteredUsers(USERS.filter((user) => user.name.includes(searchTerm))), [searchTerm]);

  const searchUser = (event) => setSearchTerm(event.target.value);

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchUser}></input>
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
