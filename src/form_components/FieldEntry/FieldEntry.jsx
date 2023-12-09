import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Context  from '../../components/registration/Context'

const FieldEntry = ({ title, name, onChange }) => {

  const contextData = useContext(Context)

  // console.log('contextData', contextData)

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label={title} 
        variant="outlined" 
        name={name}
        value={contextData[name]}   
        onChange={(e) => onChange(e)}
      />
    </Box>
  );
}

export default FieldEntry; 