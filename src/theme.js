// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#ff4081' },
    background: { default: '#f5f7fa', paper: '#ffffff' },
    text: { primary: '#1e1e1e', secondary: '#555' },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h2: { fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.2 },
    h4: { fontWeight: 600, fontSize: '1.75rem', margin: '0 0 1rem' },
    h5: { fontWeight: 500, fontSize: '1.25rem' },
    h6: { fontWeight: 500, fontSize: '1.1rem' },
    subtitle1: { fontWeight: 500, fontSize: '0.9rem' },
  },
});
export default theme;

