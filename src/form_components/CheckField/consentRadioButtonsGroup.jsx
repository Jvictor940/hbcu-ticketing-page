import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ConsentRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="I do not Consent"
        name="radio-buttons-group"
      >
        <FormControlLabel value="I Consent" control={<Radio />} label="I Consent" />
        <FormControlLabel value="I Do Not Consent" control={<Radio />} label="I Do Not Consent" />
      </RadioGroup>
    </FormControl>
  );
}