import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FieldEntry = ({ title }) => {

  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={title} variant="outlined" onChange={handleChange} />
    </Box>
  );
}

export default FieldEntry; 