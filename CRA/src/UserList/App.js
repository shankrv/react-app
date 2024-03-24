import UserFinder from './components/UserFinder';
import UsersContext from './context/users';

const USERS = [
  { id: 'U-1', name: 'John' },
  { id: 'U-2', name: 'Michael' },
  { id: 'U-3', name: 'David' },
];

function App() {
  return (
    <UsersContext.Provider value={{ users: USERS }}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
