import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({ isLoggedIn: false, onLogin: (email, password) => {}, onLogout: () => {} });

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('here');
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === '1') setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    // check email and password
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
