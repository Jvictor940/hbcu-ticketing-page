import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FieldEntry from '../FieldEntry/FieldEntry';
import "./EmergencyContactRadioButton.css";

const EmergencyContactRadioButtonsGroup = () => {
  const [popup, setPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleEmergencyChange = (e) => {
    const value = e.target.value
    setSelectedOption(value) 
    console.log( `Emergency Contact Radio Button Clicked: ${value}`)
  }

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        <FormControlLabel 
        value="I am the Emergency Contact" 
        control={<Radio className="squareRadio"/>} 
        label="I am the Emergency Contact" 
        onClick={(e) => {
          setPopup(false);
          handleEmergencyChange(e);
        }}
        />
        <FormControlLabel 
        value="Add an Emergency Contact" 
        control={<Radio className="squareRadio"/>} 
        label="Add an Emergency Contact" 
        onClick={(e) => {
          setPopup(true);
          handleEmergencyChange(e);
        }} 
        />
      </RadioGroup>
      {popup && <div className="guardian-information">
        <FieldEntry className="input-field" title='First Name' />
        <FieldEntry className="input-field" title='Last Name'/>
        <FieldEntry className="input-field" title='Email'/>
        <FieldEntry className="input-field" title='Phone'/>
        <FieldEntry className="input-field" title='Address'/>
      </div>}
    </FormControl>
  );
}

export default EmergencyContactRadioButtonsGroup;