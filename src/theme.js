import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#64ffda' }, // Teal
    secondary: { main: '#8892b0' }, // Slate
    background: { default: '#0a192f', paper: '#112240' }, // Navy, Light Navy
    text: { primary: '#e6f1ff', secondary: '#8892b0' },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    h1: { fontFamily: "'Inter', sans-serif", fontWeight: 700 },
    h2: { fontFamily: "'Inter', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Inter', sans-serif", fontWeight: 600 },
    h4: { fontFamily: "'Fira Code', monospace", fontWeight: 500 },
    h5: { fontFamily: "'Fira Code', monospace", fontWeight: 500 },
    h6: { fontFamily: "'Fira Code', monospace", fontWeight: 500 },
    body1: { fontFamily: "'Inter', sans-serif" },
    button: { fontFamily: "'Fira Code', monospace" },
  },
});
export default theme;

