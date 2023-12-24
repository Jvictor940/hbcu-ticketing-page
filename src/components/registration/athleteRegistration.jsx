import React, { useEffect, useState } from "react";
import FieldEntry from "../../form_components/FieldEntry/FieldEntry";
import AthleteDataDropdown from "../../form_components/Dropdown/AthleteDataDropdown";
import PrevNxtButtons from "../../form_components/Buttons/PrevNxtButtons";
import BirthdayCalendar from "../../form_components/Calendar/Calendar";
import FloatingActionButtons from "../../form_components/Buttons/FloatingActionButton";
import RadioButtonsGroup from "../../form_components/CheckField/RadioButtonsGroup";
import { useNavigate } from "react-router-dom";
import Context from "./Context";
import axios from "axios";
import './AthleteRegistration.css'

const AthleteRegistration = () => {
    const [athleteInformation, setAthleteInformation] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        position: '',
        size: '',
        grade: ''
    })

    const navigate = useNavigate()

    const generalAdmission = () => {
        navigate('/generalAdmission')
    }

    const contactInfo = () => {
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAthleteInputChange = (e) => {
        console.log('event', e.target)
        const { name, value} = e.target
        console.log('name', name)
        console.log('value', value)
        setAthleteInformation((prevAthleteInfo) => {
            const updatedAthleteInfo = {
                ...prevAthleteInfo, 
                [name]: value
            }
            console.log('AthleteInfo:', updatedAthleteInfo)
            return updatedAthleteInfo
        })
    }

    const handleAthleteDropdownChange = (field, value) => {
        console.log('field:', field)
        console.log('value:', value)
        setAthleteInformation((prevAthleteInfo) => ({
            ...prevAthleteInfo,
            [field]: value,
        }));
    };

    const handleAthleteSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/athlete', athleteInformation)
            console.log( 'responseData',response.data); 
        } catch (err) {
            console.log('Error submitting form', err.response)
        }
    } 


    return(
        <div className="form" >
            <h2 className="title" >Athlete Registration</h2>
            <h3 className="text-wrapper" >Athlete Training Camp</h3>
            <p>This is a unique opportunity for us to come together and share our passion for sports, while also networking with some of the brightest minds in the industry. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem saepe laudantium in sint numquam illum amet, maxime obcaecati, excepturi mollitia minima sequi eos magnam cum velit! Obcaecati ut minima corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt harum pariatur magnam, nam vero tenetur. Incidunt a nemo harum fuga voluptas ipsa nostrum earum, veniam dignissimos blanditiis, sunt consequatur minus. </p>
            
            <h4>Athlete Contact Information</h4>

                <Context.Provider value={{athleteInformation}} >
                    <div className="athlete-contact-info" >
                        <FieldEntry 
                        className='input-field' 
                        title='First Name'
                        name='firstName'
                        dataSource='athlete'
                        value={athleteInformation.firstName || ''} 
                        onChange={handleAthleteInputChange} 
                        />

                        <FieldEntry 
                        className='input-field' 
                        title='Last Name'
                        name='lastName'
                        dataSource='athlete'
                        value={athleteInformation.lastName || ''} 
                        onChange={handleAthleteInputChange} 
                        />

                        <FieldEntry 
                        className='input-field' 
                        title='Email'
                        name='email'
                        dataSource='athlete'
                        value={athleteInformation.email || ''} 
                        onChange={handleAthleteInputChange} 
                        />

                        <FieldEntry 
                        className='input-field' 
                        title='Phone'
                        name='phone'
                        dataSource='athlete'
                        value={athleteInformation.phone || ''} 
                        onChange={handleAthleteInputChange} 
                        />

                        <FieldEntry 
                        className='input-field' 
                        title='Address'
                        name='address'
                        dataSource='athlete' 
                        value={athleteInformation.address || ''}
                        onChange={handleAthleteInputChange} 
                        />
                    </div>

                    <div className="borderline" ></div>

                    <h4>Athlete Information</h4>

                    <h5>Date of Birth</h5>
                    <BirthdayCalendar />

                    <div className="athlete-dropdown">
                        <AthleteDataDropdown 
                        title='Gender'
                        name='gender' 
                        // value={athleteInformation.gender}
                        onAthleteDropdownChange={handleAthleteDropdownChange} 
                        />

                        <AthleteDataDropdown 
                        title='Position'
                        name='position' 
                        // value={athleteInformation.position}
                        onAthleteDropdownChange={handleAthleteDropdownChange} 
                        />

                        <AthleteDataDropdown 
                        title='Size'
                        name='size' 
                        // value={athleteInformation.size}
                        onAthleteDropdownChange={handleAthleteDropdownChange} 
                        />

                        <AthleteDataDropdown 
                        title='Grade'
                        name='grade' 
                        // value={athleteInformation.grade}
                        onAthleteDropdownChange={handleAthleteDropdownChange} 
                        />
                        <button onClick={handleAthleteSubmit} >Post To The Backend</button>
                    </div>

                    {/* <h5>Height</h5>
                    <FieldEntry title='ft'/>
                    <FieldEntry title='in'/> */}

                    <h5>Ticket Options</h5>
                    <RadioButtonsGroup option1='Sponsored Athlete | Free' option2='Athlete Ticket' />

                    <FloatingActionButtons />
                </Context.Provider>


            <p>
                I agree to these terms: Disclaimer - HBCU SPORTS SUMMIT FOOTBALL EVENT RELEASE, WAIVER OF LIABILITY, AND TERMS OF PARTICIPATION This Release is by the party signing below, being of lawful age (or, in the case of a minor, through his/her parent or guardian) (herein referred to as “Releasor”) and is given to HBCU Sports Summit, LLC., 1. RELEASE OF ALL CLAIMS. Releasor hereby releases and discharges Releasees from all present and future liabilities, debts, obligations, costs, expenses, damages, losses, charges, judgments, executions, liens, claims, demands, actions or causes of action of whatever nature or description, in equity or at law, whether caused in whole or in part by the Releasees or any other person or thing at the Event while Releasor is present, which the Releasor or his/her child or ward, family, estate, heirs, representatives, executors, administrators, successors or assigns (collectively, "Related Parties") may have, whether known or unknown, suspected, asserted or not asserted, arising out of participation by the Releasor or his/her child or ward in the Event (collectively, “Claims”), and agrees that Releasees are not responsible for any of the foregoing arising out of the Event, even if caused by their own negligence. The Releasor understands, acknowledges, and accepts that this Release and Waiver of Liability is intended to be binding on the Releasor and anyone related to Releasor, including his/her child or ward participating in the Event. 2. RISKS ACCEPTED; MEDICAL TREATMENT. The Releasor further understands, acknowledges and accepts that participation in the Event involves certain inherent risks, including, but not limited to, property damage, economic loss, infection by communicable disease, and serious bodily injury (including death), and agrees that the Releasor and/or his/her child or ward is voluntarily participating in the Event with full knowledge of the risks involved and accepts all risks of participation. The Releasor declares that Releasor and/or his/her child or ward is physically fit and has the requisite skill level to participate in the Event. The Releasor authorizes the Releasees and/or a party designated by the Releasees to provide medical treatment to the Releasor and/or his/her child or ward, at the Releasor's cost, should the need arise. The Releasor understands, acknowledges, and accepts that he or she must provide his/her own medical insurance for Releasor and/or his/her child or ward. a. COVID-19 AND COMMUNICABLE DISEASE NOTICE. Releasor acknowledges that the novel coronavirus SARS-CoV-2 and any resulting disease (together with any mutation, adaptation, or variation thereof (collectively, “COVID-19”)) is extremely contagious and that an inherent risk of exposure to COVID-19 and other communicable diseases exists in any place where people are or have been present, including the Event, and that no level of precautions taken by Releasees or public health officials can eliminate the risk of exposure. By participating in the Event, Releasor represents that Releasor, and his/her child or ward has complied and is complying with all relevant protocols communicated by HBCU Sports Summit , subject to change at any time based on orders, guidance, and recommendations from public health officials. Releasor agrees that he/she and his/her child or ward is/are voluntarily assuming all risks related to exposure to COVID-19 and other communicable diseases, viruses, bacteria, or illnesses and specifically releases and discharges Releasees from Claims relating to any such injury, disease, virus, bacteria, or illness in connection with the Event. 3. GRANT OF PUBLICITY RIGHTS. The Releasor further grants the Releasees the right, but does not otherwise impose the obligation, to photograph, videotape and/or otherwise use the Releasor and/or his or her child or ward’s name, face, likeness, voice and appearance in connection with exhibitions, publicity, advertising and promotional materials, free of charge without reservation or limitation. 4. REGISTRATION REFUSAL; EVENT CANCELLATION/POSTPONMENT. HBCU Sports Summit reserves the right to refuse/cancel Event registrations in its sole discretion. If HBCU Sports Summit refuses/cancels a registration, registrants will be offered a refund of Event registration fees only, if any. Further, HBCU Sports Summit reserves the right to postpone or cancel an Event due to low enrollment, inclement weather, health and safety concerns including without limitation COVID-19 protocols mandated or recommended by public health officials, or any other circumstances which would make the Event non-viable in HBCU Sports Summit’s sole discretion. If a participant feels ill or is displaying any sign of COVID-19 symptoms, they will be asked to stay home or leave the Event. A registrant will receive a refund of the event registration fees, if any, upon submission of HBCU Sports Summit-provided documentation in the event of COVID-19 symptoms or exposure. If a registrant is sent home during the course of the Event by HBCU Sports Summit Football staff due to feeling ill or displaying any sign of COVID-19 symptoms, he/she will be refunded up to 100% of the Event registration fee, if any, based on the number of days participated. If the registrant fails to notify HBCU Sports Summit before completion of the Event, no refund will be provided. If HBCU Sports Summit cancels an Event, registrants will be offered a full refund of Event registration fees only, if any. Should circumstances arise that result in the postponement of an Event, registrants will have the option to either receive a full refund of event registration fees only, if any, or, as may be applicable, transfer registration to the same Event at the new, future date. Under no circumstances is HBCU Sports Summit responsible for any costs, damages, or other expenses incurred by you associated with your participation in an Event or planned participation in a cancelled or postponed Event including, and without limitation, travel, accommodations, food, and equipment costs. 5. MISCELLANEOUS. The Releasor understands, acknowledges and accepts that this Release is intended to be as broad and inclusive as permitted by the laws of the state of Maryland and agrees that if any portion of this Release is invalid, the remainder will continue in full legal force and effect. For that reason, to the extent applicable, Releasor hereby waive(s) any and all rights or benefits that Releasor and/or his/her child or ward, may have under the terms of California Civil Code section 1542 which provides: “A general release does not extend to claims which the creditor does not know or suspect to exist in (his/her) favor at the time of executing the release, which, if known by (him/her), might have materially affected (his/her) settlement with the debtor.” Notwithstanding the foregoing, (but without limiting either party’s right to seek injunctive or other equitable relief immediately, at any time, in any court of competent jurisdiction), any disputes arising with respect to participation in the Event and/or this Release shall be settled exclusively by final and binding arbitration in accordance with the rules and procedures of the American Arbitration Association (“AAA”). The arbitrator shall be selected by joint agreement of the parties. In the event the parties cannot agree on an arbitrator within thirty (30) days of the initiating party providing the other party with written notice that it plans to seek arbitration, an arbitrator shall be determined under AAA rules. The written decision of the arbitrator shall be final and binding on the parties and enforceable in any court. The arbitration proceeding shall take place in Baltimore Maryland. RELEASOR ALSO AGREES TO RESOLVE DISPUTES ONLY ON AN INDIVIDUAL BASIS AND AGREES NOT TO BRING A CLAIM AS A PLAINTIFF OR A CLASS MEMBER IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. CLASS ARBITRATIONS, CLASS ACTIONS, PRIVATE ATTORNEY GENERAL ACTIONS, AND CONSOLIDATION WITH OTHER ARBITRATIONS ARE NOT ALLOWED. EACH PARTY FULLY UNDERSTANDS AND AGREES THAT THEY ARE GIVING UP CERTAIN RIGHTS OTHERWISE AFFORDED TO THEM BY CIVIL COURT ACTIONS, INCLUDING BUT NOT LIMITED TO THE RIGHT TO A JURY OR COURT TRIAL AND THE RIGHT TO BRING ANY CLAIM AS A CLASS OR COLLECTIVE ACTION. This Release may be accepted by manual signature and/or digital signature and/or transmission. The effectiveness of any such acceptance shall have the same force and effect as manually signed originals and shall be binding on all parties to this Release. I HAVE READ THE ABOVE RELEASE, FULLY UNDERSTAND ITS TERMS AND UNDERSTAND THE RIGHTS GRANTED BY ACCEPTANCE. RELEASOR SIGNS THIS RELEASE FREELY AND VOLUNTARILY, WITHOUT ANY INDUCEMENT OR COERCION. * 

            </p>

            <PrevNxtButtons prevPage={contactInfo} nxtPage={generalAdmission} nextBtn='Next' />

        </div>
    )
}

export default AthleteRegistration;