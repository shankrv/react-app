import { Fragment, useContext } from 'react';

import './App.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth';

function App() {
  const context = useContext(AuthContext);
  return (
    <Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
