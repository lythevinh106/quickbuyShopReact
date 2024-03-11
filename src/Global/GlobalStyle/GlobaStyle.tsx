import React from 'react';
import PropTypes from 'prop-types';

import "./style.scss"
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

interface props {

  children: React.ReactNode

}
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function GlobaStyle({ children }: props) {
  return (

    <ThemeProvider theme={theme}>

      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>

  );
}

export default GlobaStyle;