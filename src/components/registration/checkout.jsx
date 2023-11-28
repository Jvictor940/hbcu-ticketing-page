import React from "react";
import FieldEntry from "../../form_components/FieldEntry/FieldEntry";
import PrevNxtButtons from "../../form_components/Buttons/PrevNxtButtons";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
    const navigate = useNavigate()

    const congrats = () => {
        navigate('/congrats')
    }

    const generalAdmission = () => {
        navigate('/generalAdmission')
    }

    return(
        <div>
            <h2>Check Out</h2>
            <h4>Payment Information</h4>
            <FieldEntry title='First Name' />
            <FieldEntry title='Last Name' />
            <FieldEntry title='Card Information' />
            <FieldEntry title='CVV' />
            <FieldEntry title='Billing Address' />

            <PrevNxtButtons prevPage={generalAdmission} nxtPage={congrats} nextBtn='Place Order' />
        </div>
    )
}

export default Checkout;