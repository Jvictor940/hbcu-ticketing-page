import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './FloatingActionButton.css'
import FieldEntry from '../FieldEntry/FieldEntry';
// import { Label } from '@mui/icons-material';
// import { TextField } from '@mui/material';
import BirthdayCalendar from '../Calendar/Calendar';
import AthleteDataDropdown from '../Dropdown/AthleteDataDropdown';
import RadioButtonsGroup from '../CheckField/RadioButtonsGroup';

 const FloatingActionButtons = () => {
    const [fieldCount, setFieldCount] = useState(1); // keeps track of the number of input fields we want to render
    const [athleteInputValues, setAthleteInputValues] = useState({}); // This state variable is an object that keeps track of the values entered in each input field. It uses field names like field1, field2, etc.

    const handleAddAthleteField = () => {
        setFieldCount(prevCount => prevCount + 1);
    }; // This function is called when the "AddIcon" is clicked. It increases the fieldCount by 1, which dynamically adds more input fields to the form.

    const handleRemoveAthleteField = () => {
        setFieldCount(prevCount => prevCount - 1)
    }
    
    const handleAthleteInputChange = (fieldName, value) => {
        setAthleteInputValues(prevValues => ({
            ...prevValues,
            [fieldName]: value,
        })); 
    }; // This function is called when the user types in an input field. It updates the inputValues state to keep track of the values entered in each field.
    
    const handleAthleteChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    
    const renderInputFields = () => {
        const athleteInputFields = [];

        for (let i = 2; i <= fieldCount; i++) {
            const fieldName = `Athlete ${i}`;
            athleteInputFields.push(
                <div key={fieldName}>

                    <h3>{fieldName}</h3> 
                    <h4>Athlete Contact Information</h4>
            <div className="athlete-contact-info" >
                <FieldEntry className='input-field' title='First Name' />
                <FieldEntry className='input-field' title='Last Name'/>
                <FieldEntry className='input-field' title='Email'/>
                <FieldEntry className='input-field' title='Phone'/>
                <FieldEntry className='input-field' title='Address'/>
            </div>

            <div className="borderline" ></div>

            <h4>Athlete Information</h4>

            <h5>Date of Birth</h5>
            <BirthdayCalendar />

            <div className="athlete-dropdown">
                <AthleteDataDropdown title='Gender' />
                <AthleteDataDropdown title='Position' />
                <AthleteDataDropdown title='Size' />
                <AthleteDataDropdown title='Grade' />
            </div>
            
            <h5>Ticket Options</h5>
            <RadioButtonsGroup option1='Sponsored Athlete | Free' option2='Athlete Ticket' />
            <button className='remove-btn' onClick={handleRemoveAthleteField}>Remove</button>
            </div>
            )

        }
        return athleteInputFields;
    }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        {renderInputFields()}
        <div className='add-athlete-box'>

            <Fab size='small' color="primary" aria-label="add">
                <AddIcon onClick={handleAddAthleteField} />
            </Fab>
            <p className='add-athlete-txt'>Add Another Athlete</p>
        </div>
    </Box>
  );
}

export default FloatingActionButtons;