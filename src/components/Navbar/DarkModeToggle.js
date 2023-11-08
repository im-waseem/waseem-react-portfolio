import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <IconButton
      color="inherit"
      aria-label={darkMode ? 'Light mode' : 'Dark mode'}
      onClick={toggleDarkMode}
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default DarkModeToggle;
