import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './PrevNxtButtons.css'
// import { ThemeProvider } from "styled-components";
// import { createTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const themeNxt = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFA800', // Set your desired background color
          color: 'black', // Set your desired text color
          borderRadius: '500px',
          '&:hover': {
            backgroundColor: '#FFA840', // Set your desired background color on hover
          },
        },
      },
    },
  },
});
const themeBack = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000', // Set your desired background color
          color: '#FFA800', // Set your desired text color
          borderRadius: '500px',
          '&:hover': {
            backgroundColor: '#000019', // Set your desired background color on hover
          },
        },
      },
    },
  },
});


const PrevNxtButtons = ({ nxtPage, prevPage, nextBtn }) => {

  return (
    <Stack className='prev-nxt-btn' direction="row" spacing={2}>
      <ThemeProvider theme={themeBack}>
        <Button  variant="contained" onClick={prevPage}>Back</Button>
      </ThemeProvider>

      <ThemeProvider theme={themeNxt}>

        <Button  variant="contained" href="#contained-buttons" onClick={nxtPage}>
          {nextBtn}
        </Button>
      </ThemeProvider>
    </Stack>
  );
}

export default PrevNxtButtons;