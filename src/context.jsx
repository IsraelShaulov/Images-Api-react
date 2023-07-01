import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const getInitialDarkMode = () => {
  // line 7,11 returns true or false
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  // console.log(prefersDarkMode);
  const storedDarkMode =
    localStorage.getItem('darkTheme') === 'true' ? true : false;
  return storedDarkMode || prefersDarkMode;
};

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('cat');

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
    // console.log(body);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', isDarkTheme);
  }, []);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
