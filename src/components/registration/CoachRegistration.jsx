import React from 'react'
import FieldEntry from '../../form_components/FieldEntry/FieldEntry';
import PrevNxtButtons from '../../form_components/Buttons/PrevNxtButtons';
import RadioButtonsGroup from '../../form_components/CheckField/RadioButtonsGroup';
import { useNavigate } from 'react-router-dom';
import './CoachRegistration.css'

const CoachRegistration = () => {
    const navigate = useNavigate()

    const checkoutPage = () => {
        navigate('/checkout')
    }

  return (
    <div className='form'>
        <h2 className='title'>Coach Registration</h2>
        <FieldEntry className='input-field' title='First Name' />
        <FieldEntry className='input-field' title='Last Name'/>
        <FieldEntry className='input-field' title='Email'/>
        <FieldEntry className='input-field' title='Phone'/>
        <FieldEntry className='input-field' title='School'/>
        <FieldEntry className='input-field' title='Address'/>

        {/* <div className='borderline'></div> */}

        <h5>Ticket Options</h5>
        <RadioButtonsGroup option2='Coach Ticket' />

        <PrevNxtButtons nxtPage={checkoutPage} nextBtn='Next' />
    </div>
  )
}

export default CoachRegistration;
