import React from "react";
import ContactInformation from "./components/registration/ContactInformation";
import AthleteRegistration from "./components/registration/AthleteRegistration";
import GeneralAdmission from "./components/registration/GeneralAdmission";
import Checkout from "./components/registration/Checkout";
import Congrats from "./components/registration/Congrats";
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  //Link
} from "react-router-dom"

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ContactInformation />} />
          <Route exact path="/athleteRegistration" element={<AthleteRegistration />} />
          <Route exact path="/generalAdmission" element={<GeneralAdmission />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/congrats" element={<Congrats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
