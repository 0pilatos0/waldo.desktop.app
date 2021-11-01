import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppBar from './components/AppBar'
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <AppBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
