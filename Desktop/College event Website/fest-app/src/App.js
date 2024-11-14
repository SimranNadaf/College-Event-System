import Contact from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login_Student from "./component/Login_Student";
import Login_Organization from "./component/Login_Organization";
import Registration_Student from "./component/Registration_Student";
import Registration_Organization from "./component/Registration_Organization";
import ScrollToTop from "./component/ScrollToTop";
import Alert from "./component/Alert";
import { useState } from "react";
import OrgSidebar from "./component/OrgSidebar";
import StudentProfile from "./component/StudentProfile";
import OrgProfile from "./component/OrgProfile";
import EventsStudent from "./component/EventsStudent";
import CreateEvents from "./component/CreateEvents";
import EventsOrg from "./component/EventsOrg";
import CreateEventForm from "./component/CreateEventForm";
import EventRegistrationForm from "./component/EventRegistrationForm";
import StudentMyEvent from "./component/StudentMyEvent";

// import Dashboard from "./component/Dashboard";

const App = () => {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <Navbar/>

        <ScrollToTop/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/StudentRegistration" element={<Registration_Student alert={showAlert}/>} />
          <Route path="/StudentLogin" element={<Login_Student alert={showAlert}/>} />
          <Route path="/OrganizationRegitration" element={<Registration_Organization alert={showAlert}/>} />
          <Route path="/OrganizationLogin" element={<Login_Organization alert={showAlert}/>} />
          <Route path="/OrgDashboard" element={<OrgSidebar/>} />
          <Route path="/StudentProfile" element={<StudentProfile alert={showAlert}/>} />
          <Route path="/OrgProfile" element={<OrgProfile alert={showAlert}/>} />
          <Route path="/CreateEventForm" element={<CreateEventForm alert={showAlert}/>} />
          <Route path="/EventsStudent" element={<EventsStudent/>} />
          <Route path="/CreateEvents" element={<CreateEvents/>} />
          <Route path="/EventsOrg" element={<EventsOrg/>} />
          <Route path="/EventRegistrationForm" element={<EventRegistrationForm alert={showAlert}/>} />
          <Route path="/StudentMyEvent" element={<StudentMyEvent/>} />
        </Routes>
        <Alert alert={alert}/>

        <Footer />
        {/* <Dashboard/> */}

      </Router>
    </>
  );
};

export default App;


