import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark', // Set the theme type to dark
    primary: {
      main: '#007bff', // Your primary color
    },
  },
  background: {
    default: '#121212', // Dark background color
  },
  text: {
    primary: '#fff', // Primary text color
  },
  // Add more customizations as needed
});

export default theme;
