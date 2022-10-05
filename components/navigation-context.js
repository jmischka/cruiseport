import React from 'react';

const NavigationContext = React.createContext(null);

const NavigationProvider = ({ value, children }) => {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };