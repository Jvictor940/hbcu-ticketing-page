import React from "react";
import FieldEntry from "../../form_components/FieldEntry/FieldEntry"
import ECRadioButtonsGroup from "../../form_components/CheckField/EmergencyContactRadioButton";
import ConsentRadioButtonsGroup from "../../form_components/CheckField/consentRadioButtonsGroup";

const ContactInformation = () => {
    return (
        <div>
            <h2 className="title">HBCU Sports Summit-Baltimore</h2>
            <h3>May 3, 2024</h3>
            <h3>M&T Bank Stadium / Baltimore MD</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque, adipisci molestiae quisquam in voluptas laborum aliquam doloribus, iusto dolorum quibusdam maxime quo iste necessitatibus quod at hic. Quam, fugit.</p>

            <h2>Contact Information</h2>
            <h4>Guardian Information</h4>
            <FieldEntry title='First Name' />
            <FieldEntry title='Last Name'/>
            <FieldEntry title='Email'/>
            <FieldEntry title='Phone'/>
            <FieldEntry title='Address'/>

            <h4>Emergency Contact</h4>
            <ECRadioButtonsGroup />

            <h4>Consent</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, obcaecati delectus, sit doloremque sequi quam aut repudiandae voluptate harum, facilis consectetur nisi saepe omnis! Nesciunt, sunt! Accusantium provident autem tenetur?</p>

            <ConsentRadioButtonsGroup />



            <button>Continue to Athlete Registration</button>
        </div>
    )
}

export default ContactInformation; 