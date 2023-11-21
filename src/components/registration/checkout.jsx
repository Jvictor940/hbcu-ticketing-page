import React from "react";
import FieldEntry from "../../form_components/FieldEntry/FieldEntry";
import ContainedButtons from "../../form_components/Buttons/buttons";

const CheckOut = () => {
    return(
        <div>
            <h2>Check Out</h2>
            <h4>Payment Information</h4>
            <FieldEntry title='First Name' />
            <FieldEntry title='Last Name' />
            <FieldEntry title='Card Information' />
            <FieldEntry title='CVV' />
            <FieldEntry title='Billing Address' />

            <ContainedButtons />
        </div>
    )
}

export default CheckOut;