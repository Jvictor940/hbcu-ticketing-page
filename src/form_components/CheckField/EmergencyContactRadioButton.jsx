import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FieldEntry from '../FieldEntry/FieldEntry';
import "./EmergencyContactRadioButton.css";

const EmergencyContactRadioButtonsGroup = ({ onEmergencyOptionChange }) => {
  const [popup, setPopup] = useState(false);
  const [emergencyContactData, setEmergencyContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleEmergencyChange = (e) => {
    const { name, value } = e.target;
    setEmergencyContactData({
      ...emergencyContactData,
      [name]: value,
    });
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        <FormControlLabel
          name='emergencyRadioOption'
          value="I am the Emergency Contact"
          control={<Radio className="squareRadio" />}
          label="I am the Emergency Contact"
          onClick={(e) => {
            setPopup(false);
            onEmergencyOptionChange(e);
          }}
        />

        <FormControlLabel
          name='emergencyRadioOption'
          value="Add an Emergency Contact"
          control={<Radio className="squareRadio" />}
          label="Add an Emergency Contact"
          onClick={(e) => {
            setPopup(true);
            onEmergencyOptionChange(e);
          }}
        />
      </RadioGroup>
      {popup && (
        <div className="guardian-information">
          <FieldEntry
            className="input-field"
            title="First Name"
            name="firstName"
            value={emergencyContactData.firstName}
            onChange={handleEmergencyChange}
          />
          <FieldEntry
            className="input-field"
            title="Last Name"
            name="lastName"
            value={emergencyContactData.lastName}
            onChange={handleEmergencyChange}
          />
          <FieldEntry
            className="input-field"
            title="Email"
            name="email"
            value={emergencyContactData.email}
            onChange={handleEmergencyChange}
          />
          <FieldEntry
            className="input-field"
            title="Phone"
            name="phone"
            value={emergencyContactData.phone}
            onChange={handleEmergencyChange}
          />
          <FieldEntry
            className="input-field"
            title="Address"
            name="address"
            value={emergencyContactData.address}
            onChange={handleEmergencyChange}
          />
        </div>
      )}
    </FormControl>
  );
};

export default EmergencyContactRadioButtonsGroup;