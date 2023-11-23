import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './PrevNxtButtons.css'

const PrevNxtButtons = ({ nxtPage, prevPage, nextBtn }) => {

  return (
    <Stack className='prev-nxt-btn' direction="row" spacing={2}>
        <Button  variant="contained" onClick={prevPage}>Back</Button>
        <Button  variant="contained" href="#contained-buttons" onClick={nxtPage}>
          {nextBtn}
        </Button>
    </Stack>
  );
}

export default PrevNxtButtons;