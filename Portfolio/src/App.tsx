import AboutUs from "./components/aboutUs";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ContactUs from "./contactUs";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutUs />
	  <Experience/>
	  <Projects/>
	  <Skills/>
	  <ContactUs/>
	  <Footer/>
    </>
  );
}

export default App;
