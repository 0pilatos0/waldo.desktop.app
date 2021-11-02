import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import AppBar from './components/AppBar'
import Home from './Views/Home/Home'


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
      <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
