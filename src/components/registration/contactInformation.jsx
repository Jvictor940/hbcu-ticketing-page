import React from "react";
import FieldEntry from "../../form_components/FieldEntry/FieldEntry"

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
        </div>
    )
}

export default ContactInformation; 