import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#FF6B00' },   // Orange
    secondary: { main: '#000000' }, // Black
    background: { default: '#FFFFFF' },
    text: { primary: '#000000', secondary: '#FF6B00' },
  },
  typography: { fontFamily: 'Arial, sans-serif' },
});

export default theme;
