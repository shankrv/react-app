import { Component, Fragment } from 'react';

import classes from './UserFinder.module.css';

import Users from './Users';

const USERS = [
  { id: 'U-1', name: 'John' },
  { id: 'U-2', name: 'Michael' },
  { id: 'U-3', name: 'David' },
];

// Class-based Component
class UserFinder extends Component {
  constructor() {
    super();
    this.state = { searchTerm: '', filteredUsers: [] };
  }

  componentDidMount() {
    this.setState({ filteredUsers: USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({ filteredUsers: USERS.filter((user) => user.name.includes(this.state.searchTerm)) });
    }
  }

  searchUser(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchUser.bind(this)}></input>
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

/* Functional Component
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
*/

export default UserFinder;
