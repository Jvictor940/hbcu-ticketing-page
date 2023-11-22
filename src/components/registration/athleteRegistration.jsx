import React from "react";
import FieldEntry from "../../form_components/FieldEntry/FieldEntry";
import AthleteDataDropdown from "../../form_components/Dropdown/AthleteDataDropdown";
import PrevNxtButtons from "../../form_components/Buttons/PrevNxtButtons";
import BirthdayCalendar from "../../form_components/Calendar/Calendar";

const AthleteRegistration = () => {
    return(
        <div>
            <h2>Athlete Registration</h2>
            <h4>Athlete Training Camp</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, perspiciatis accusantium. Laborum, esse atque. Minima enim reprehenderit ipsa maxime perspiciatis, quis impedit unde laborum veritatis fuga eveniet laudantium a modi!</p>
            
            <h4>Athlete Contact Information</h4>
            <FieldEntry title='First Name' />
            <FieldEntry title='Last Name'/>
            <FieldEntry title='Email'/>
            <FieldEntry title='Phone'/>
            <FieldEntry title='Address'/>

            <h4>Athlete Information</h4>
            <BirthdayCalendar />
            <AthleteDataDropdown title='Gender' />
            <AthleteDataDropdown title='Position' />
            <AthleteDataDropdown title='Size' />
            <AthleteDataDropdown title='Grade' />
            <FieldEntry title='ft'/>
            <FieldEntry title='in'/>

            <h5>Ticket Options</h5>

            <p>Disclaimer | Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut perferendis asperiores obcaecati libero quia accusantium, corporis velit similique saepe doloremque sed autem, modi quas atque magnam quidem sapiente. Doloribus.</p>

            <PrevNxtButtons />

        </div>
    )
}

export default AthleteRegistration;