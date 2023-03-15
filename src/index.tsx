import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider,createTheme } from '@mui/material'

const theme=createTheme({
  
  palette:{

    primary:{
      main:"#000",
    },
    secondary:{
      main:"#098500",
    },
    success: {
      main: "#0073f8fc",
    },
    // standord:{
    //   main:""
    // }
  },
})   


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);

