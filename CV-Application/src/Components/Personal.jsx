import { useState } from "react";
import "./Personal.css";

function Personal() {
  return (
    <div>
      <h1>Resume</h1>
      <input type="text" placeholder="Enter Your First Name" />
      <input type="text" placeholder="Enter Your Last Name" />
      <input type="email" placeholder="example@example.com" />
      <input type="text" placeholder="ex: (123)-456-7890" />
    </div>
  );
}

export default Personal;

// A section to add general information like name, email and phone number.

// Be sure to include an edit and submit button for each section or for the whole CV.
// The submit button should submit your form and display the value of your input fields in HTML elements.
// The edit button should add back (display) the input fields, with the previously displayed information as values.
// In those input fields, you should be able to edit and resubmit the content.
// You’re going to make heavy use of state and props, so make sure you understood those concepts.
// Create a components directory under your src directory and add your components.
// Include a styles directory under your src directory for your CSS files. You’ll need to import these in the component files to use them.
