import { useState } from "react";
import Personal from "./Components/Personal.jsx";
import Education from "./Components/Education.jsx";
import Experience from "./Components/Experience.jsx";
import Skills from "./Components/Skills.jsx";
import Resume from "./Components/Resume.jsx";
import "./App.css";

function App() {
  const [personalData, setPersonalData] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNum: "1234567890",
    email: "JohnDoe@email.com",
    location: "Dallas, Texas",
  });
  // const [experiences, setExperiences]

  return (
    <div className="App">
      <h1>Build Your Resume!</h1>
      <div className="container">
        <div className="forms-container">
          <Personal
            personalData={personalData}
            setPersonalData={setPersonalData}
          />
          <Education />
          <Experience />
          <Skills />
        </div>
        <div className="resume-container">
          <Resume personalData={personalData} />
        </div>
      </div>
    </div>
  );
}

export default App;
