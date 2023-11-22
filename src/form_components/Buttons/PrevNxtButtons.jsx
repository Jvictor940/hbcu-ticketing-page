import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const PrevNxtButtons = ({ nxtPage, prevPage }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={prevPage}>Back</Button>
      <Button variant="contained" href="#contained-buttons" onClick={nxtPage}>
        Next
      </Button>
    </Stack>
  );
}

export default PrevNxtButtons;