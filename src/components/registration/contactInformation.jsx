import React, { useEffect } from "react";
import FieldEntry from "../../form_components/FieldEntry/FieldEntry"
import EmergencyContactRadioButtonsGroup from "../../form_components/CheckField/EmergencyContactRadioButton";
import RadioButtonsGroup from "../../form_components/CheckField/RadioButtonsGroup";
import "./ContactInformation.css"
import PrevNxtButtons from "../../form_components/Buttons/PrevNxtButtons";
import { useNavigate } from "react-router-dom"

const ContactInformation = () => {
    const navigate = useNavigate(); 

    const athleteRegistrationPage = () => {
        navigate("/athleteRegistration")
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="wallpaper"></div>
            <div className="form">
                <h1 className="title">HBCU Sports Summit-Baltimore</h1>
                <h2 className="text-wrapper">April 20th - 21st, 2024</h2>
                <h2 className="text-wrapper">M&T Bank Stadium / Baltimore MD</h2>
                <p>This is a platform that gives coaches and athletes a chance to see the competitive talent on the field, and we are also educating the players and families in this process of the eligibility to higher learning. The purpose of the summit is to increase the enrollment process of an HBCU. This gives the kids an unforgettable experience in an NFL Stadium on the field, and a personal one on one experience with an NFL Player who has been through this process. 
                    
                We will have educational panels for the parents and kids going over the process of college admissions, fitness training & nutrition, mental health and wellness, Black Tech, and financial literacy information on the process of enrolling in a HBCU with proper financial planning. There will be an expo, job fair and HBCU college fair with student recruits, local vendors, sponsors, media outlets, barbers, and braiders with so much more. The celebrity panels will showcase NFL players & HBCU Alumni panels talking about their HBCU experiences, mental health, job opportunities, internships, podcasts and much more. This is an opportunity to showcase and share these brands with all of you that come through the HBCU Sports Summit.
                </p>

                <div className="borderline"></div>

                <h1 className="title">Contact Information</h1>
                <h4>Guardian Information</h4>
                <div className="guardian-information">
                    <FieldEntry className="input-field" title='First Name' />
                    <FieldEntry className="input-field" title='Last Name'/>
                    <FieldEntry className="input-field" title='Email'/>
                    <FieldEntry className="input-field" title='Phone'/>
                    <FieldEntry className="input-field" title='Address'/>
                </div>

                <h4>Emergency Contact</h4>
                <EmergencyContactRadioButtonsGroup />

                <h4>Consent</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, obcaecati delectus, sit doloremque sequi quam aut repudiandae voluptate harum, 
                facilis consectetur nisi saepe omnis! Nesciunt, sunt! Accusantium provident autem tenetur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, obcaecati delectus, sit doloremque sequi quam aut repudiandae voluptate harum, 
                facilis consectetur nisi saepe omnis! Nesciunt, sunt! Accusantium provident autem tenetur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, obcaecati delectus, sit doloremque sequi quam aut repudiandae voluptate harum, 
                facilis consectetur nisi saepe omnis! Nesciunt, sunt! Accusantium provident autem tenetur?
                </p>

                <RadioButtonsGroup option1='I Consent' option2='I Do Not Consent' />

                <PrevNxtButtons nxtPage={athleteRegistrationPage} nextBtn='Continue to Athlete Registration' />
            </div>
        </div>
    )
}

export default ContactInformation; 