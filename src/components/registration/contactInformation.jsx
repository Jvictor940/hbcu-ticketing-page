import React from "react";
import FieldEntry from "../../form_components/FieldEntry/FieldEntry"
import ECRadioButtonsGroup from "../../form_components/CheckField/EmergencyContactRadioButton";
import ConsentRadioButtonsGroup from "../../form_components/CheckField/consentRadioButtonsGroup";
import "./contactInformation.css"
import ContainedButtons from "../../form_components/Buttons/buttons";
import { useNavigate } from "react-router-dom"

const ContactInformation = () => {
    const navigate = useNavigate(); 

    const athleteRegistrationPage = () => {
        navigate("/athleteRegistration")
    }

    return (
        <div>
            <div className="wallpaper">Placeholder for wallpaper</div>
            <div className="form">
                <h1 className="title">HBCU Sports Summit-Baltimore</h1>
                <h3>May 3, 2024</h3>
                <h3>M&T Bank Stadium / Baltimore MD</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque, adipisci molestiae quisquam in voluptas laborum aliquam doloribus, 
                iusto dolorum quibusdam maxime quo iste necessitatibus quod at hic. Quam, fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque, adipisci molestiae quisquam in voluptas laborum aliquam doloribus, 
                iusto dolorum quibusdam maxime quo iste necessitatibus quod at hic. Quam, fugit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque, adipisci molestiae quisquam in voluptas laborum aliquam doloribus, 
                iusto dolorum quibusdam maxime quo iste necessitatibus quod at hic. Quam, fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque, adipisci molestiae quisquam in voluptas laborum aliquam doloribus, 
                iusto dolorum quibusdam maxime quo iste necessitatibus quod at hic. Quam, fugit.
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
                <ECRadioButtonsGroup />

                <h4>Consent</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, obcaecati delectus, sit doloremque sequi quam aut repudiandae voluptate harum, 
                facilis consectetur nisi saepe omnis! Nesciunt, sunt! Accusantium provident autem tenetur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, obcaecati delectus, sit doloremque sequi quam aut repudiandae voluptate harum, 
                facilis consectetur nisi saepe omnis! Nesciunt, sunt! Accusantium provident autem tenetur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, obcaecati delectus, sit doloremque sequi quam aut repudiandae voluptate harum, 
                facilis consectetur nisi saepe omnis! Nesciunt, sunt! Accusantium provident autem tenetur?
                </p>

                <ConsentRadioButtonsGroup />

                <ContainedButtons page={athleteRegistrationPage} />
            </div>
        </div>
    )
}

export default ContactInformation; 