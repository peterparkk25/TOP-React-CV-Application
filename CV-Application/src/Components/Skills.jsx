import { useState } from "react";
import "../Styles/Skills.css";

function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <div className="skills-container">
        <input type="text" placeholder="Enter a Skill" />
        <button>Add</button>
      </div>
    </div>
  );
}

export default Skills;
