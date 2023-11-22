import React from "react";
import { useNavigate } from "react-router-dom";
import PrevNxtButtons from "../../form_components/Buttons/PrevNxtButtons";

const GeneralAdmission = () => {
    const navigate = useNavigate()

    const checkout = () => {
        navigate('/checkout')
    }

    return (
        <div>
            <h2>General Admission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi placeat, consequatur soluta officiis aperiam corporis mollitia consequuntur facilis enim. Quaerat quis suscipit inventore quos laborum nostrum. Reiciendis, amet modi.</p>

            <h4>Ticket Options</h4>

            <PrevNxtButtons page={checkout} />
            
        </div>
    )
}

export default GeneralAdmission;