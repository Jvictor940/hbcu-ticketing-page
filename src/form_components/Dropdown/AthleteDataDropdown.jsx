import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { gender, position, size, grade } from './athleteData';
import {v4 as uuidv4 } from 'uuid'


const AthleteDataDropdown = ({ title, name,  onAthleteDropdownChange }) => {
  const [dataType, setDataType] = useState([])
  const [field, setField] = useState('');

  useEffect(() => {
      if (title === 'Gender') {
        setDataType(gender)
      } else if (title === 'Position') {
        setDataType(position)
      } else if (title === 'Size') {
        setDataType(size)
      } else {
        setDataType(grade)
      }
  }, [])

  const handleDropdownChange = (event) => {
    const { value } = event.target;
    setField(event.target.value);
    onAthleteDropdownChange(name, value); // Pass the title and selected value to the parent component
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={field}
          label={title}
          onChange={handleDropdownChange}
        >

          {dataType.map((data) => (
            <MenuItem key={uuidv4()} value={data}>{data}</MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>
  );
}

export default AthleteDataDropdown;