import React from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children, user }) => (
  <UserContext.Provider value={ user || null}>
    {children}
  </UserContext.Provider>
);

export { UserContext as default, UserProvider };
