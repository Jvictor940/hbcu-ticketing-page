import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const ContainedButtons = ({ page }) => {
  const navigate = useNavigate('/')

  const contactInfo = () => {
    navigate('/')
  }
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={contactInfo}>Back</Button>
      <Button variant="contained" href="#contained-buttons" onClick={page}>
        Next
      </Button>
    </Stack>
  );
}

export default ContainedButtons;