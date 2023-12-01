import React from "react";
import { useNavigate } from "react-router-dom";
import PrevNxtButtons from "../../form_components/Buttons/PrevNxtButtons";
import QuantityDropdownField from "../../form_components/Dropdown/QuantityDropdownField";

const GeneralAdmission = () => {
    const navigate = useNavigate()

    const checkout = () => {
        navigate('/checkout')
    }

    const athleteRegistration = () => {
        navigate('/athleteRegistration')
      }

    return (
        <div className="form">
            <h2 className="title">General Admission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi placeat, consequatur soluta officiis aperiam corporis mollitia consequuntur facilis enim. Quaerat quis suscipit inventore quos laborum nostrum. Reiciendis, amet modi.</p>

            <h4>Ticket Options</h4>
            <p>General Admission - Saturday</p>
            <QuantityDropdownField />
            <p>General Admission - Sunday</p>
            <QuantityDropdownField />

            <PrevNxtButtons prevPage={athleteRegistration} nxtPage={checkout} nextBtn='Continue To Checkout' />
            
        </div>
    )
}

export default GeneralAdmission;