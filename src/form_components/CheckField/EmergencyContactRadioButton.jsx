import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ECRadioButtonsGroup = () => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Emergency Contact"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Emergency Contact" control={<Radio className="squareRadio"/>} label="I am the Emergency Contact" />
        <FormControlLabel value="Add Emergency Contact" control={<Radio className="squareRadio"/>} label="Add an Emergency Contact" />
        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>
  );
}

export default ECRadioButtonsGroup;