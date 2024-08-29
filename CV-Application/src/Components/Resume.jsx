import { useState } from "react";
import "../Styles/Resume.css";

function Resume({ personalData }) {
  return (
    <div>
      <h1>{personalData.firstName + " " + personalData.lastName}</h1>
      <div>
        <p>{personalData.phoneNum}</p>
        <p>{personalData.email}</p>
        <p>{personalData.location}</p>
      </div>
    </div>
  );
}

export default Resume;
