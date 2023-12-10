import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtonsGroup = ({option1, option2}) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        {/* <FormControlLabel value={option1} control={<Radio />} label={option1} /> */}
        <FormControlLabel value={option2} control={<Radio />} label={option2} />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;