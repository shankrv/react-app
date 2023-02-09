import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((userList) => {
      user.id = 'U-' + (userList.length + 1);
      return [...userList, user];
    });
  };

  return (
    <div>
      <h2>Users</h2>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
