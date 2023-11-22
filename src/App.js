import ContactInformation from "./components/registration/ContactInformation";
import AthleteRegistration from "./components/registration/AthleteRegistration";
// import GeneralAdmission from "./components/registration/generalAdmission";
// import CheckOut from "./components/registration/checkout";
// import Congrats from "./components/registration/congrats";
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ContactInformation />} />
          <Route exact path="/athleteRegistration" element={<AthleteRegistration />} />
        </Routes>
      </Router>
      {/* <GeneralAdmission /> */}
      {/* <CheckOut /> */}
      {/* <Congrats /> */}
    </div>
  );
}

export default App;
