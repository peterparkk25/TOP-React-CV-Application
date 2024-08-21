import "./Education.css";

function Education() {
  return (
    <div>
      <h1>Education</h1>
      <input type="text" placeholder="Enter Your School Name" />
      {/* try to change to drop down menu of existing schools here */}
      <input type="text" placeholder="Enter Your Major" />
      {/* try to change to drop down menu of existing major and minors here */}
      <input type="text" placeholder="Enter Your Minor If Any" />
      <div>Date Attended</div>
      <div>From</div>
      <input type="date" />
      <div>To</div>
      <input type="date" />
    </div>
  );
}

export default Education;

// A section to add your educational experience (school name, title of study and date of study)
