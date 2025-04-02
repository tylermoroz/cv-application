import DisplayInput from "./DisplayInput.jsx";
// import "./styles/Education.css";

function Education() {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <DisplayInput label="School:" type="text" id="school" name="school" />
      <DisplayInput
        label="Title of study:"
        type="text"
        id="title-of-study"
        name="title-of-study"
      />
      <DisplayInput
        label="Date of study:"
        type="date"
        id="date-of-study"
        name="date-of-study"
      />
    </div>
  );
}

export default Education;
