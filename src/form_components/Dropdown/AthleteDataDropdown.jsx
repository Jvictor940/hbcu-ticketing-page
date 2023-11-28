import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { gender, position, size, grade } from './athleteData';
import {v4 as uuidv4 } from 'uuid'


const AthleteDataDropdown = ({ title }) => {
  const [dataType, setDataType] = useState([])

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


  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={title}
          onChange={handleChange}
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