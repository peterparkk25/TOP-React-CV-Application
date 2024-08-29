import { useState } from "react";
import "../Styles/Experience.css";

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <input type="text" placeholder="Enter Your Company Name" />
      <input type="text" placeholder="Enter Your Position" />
      <div className="date-container">
        <div>From</div>
        <input type="date" />
        <div>To</div>
        <input type="date" />
      </div>
    </div>
  );
}

export default Experience;

// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
