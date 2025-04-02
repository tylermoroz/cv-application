import DisplayInput from "./DisplayInput.jsx";
// import "./styles/Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <DisplayInput label="Company:" type="text" id="company" name="company" />
      <DisplayInput
        label="Position:"
        type="text"
        id="position"
        name="position"
      />
      <DisplayInput
        label="Responsibilities:"
        id="responsibilities"
        name="responsibilities"
        textarea={true}
      />
      <DisplayInput
        label="Date started:"
        type="date"
        id="date-started"
        name="date-started"
      />
      <DisplayInput
        label="Date ended:"
        type="date"
        id="date-ended"
        name="date-ended"
      />
    </div>
  );
}

export default Experience;
