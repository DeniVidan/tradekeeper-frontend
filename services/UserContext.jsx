import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This effect will run on every page reload
    // Reset the user data to null
    setUser(null);
  }, []);

  const storeUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, storeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };