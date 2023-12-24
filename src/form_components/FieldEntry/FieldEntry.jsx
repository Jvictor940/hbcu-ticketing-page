import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Context  from '../../components/registration/Context'

const FieldEntry = ({ title, name, onChange }) => {

  const contextData = useContext(Context)
  // const value = contextData[name] || '' // so that our TextField does not initially start as undefined when React renders the component. So we provide a default value. 
  const guardianData = contextData?.guardianData || {}; // checks if contextData.guardianData exists before accessing its properties, preventing the "Cannot read properties of undefined" error.

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
        value={guardianData[name] || ''} // checks if contextData.guardianData exists before accessing its properties, preventing the "Cannot read properties of undefined" error.
        onChange={(e) => onChange(e)}
      />
    </Box>
  );
}

export default FieldEntry; 