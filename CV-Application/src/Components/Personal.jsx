import { useState } from "react";
import "../Styles/Personal.css";

function Personal({ personalData, setPersonalData }) {
  const handlePersonalData = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form>
      <h1>Personal Information</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="John"
        name="firstName"
        value={personalData.firstName}
        onChange={handlePersonalData}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder="Doe"
        name="lastName"
        value={personalData.lastName}
        onChange={handlePersonalData}
      />
      <label htmlFor="phoneNum">Phone Number</label>
      <input
        type="text"
        placeholder="1234567890"
        name="phoneNum"
        value={personalData.phoneNum}
        onChange={handlePersonalData}
      />
      <label htmlFor="email">email</label>
      <input
        type="text"
        placeholder="JohnDoe@email.com"
        name="email"
        value={personalData.email}
        onChange={handlePersonalData}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        placeholder="Dallas, Texas"
        name="location"
        value={personalData.location}
        onChange={handlePersonalData}
      />
    </form>
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
