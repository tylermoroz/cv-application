import { useState } from "react";
import DisplayInput from "./DisplayInput.jsx";
import "../styles/Education.css";

function Education() {
  const [formValues, setFormValues] = useState({
    school: "",
    study: "",
    date: "",
  });
  const [submittedValues, setSubmittedValues] = useState({
    school: "",
    study: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (field, e) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing === true) {
      setSubmittedValues(formValues);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="education-container">
      <h1>Education</h1>
      <form onSubmit={handleSubmit}>
        <DisplayInput
          label="School:"
          type="text"
          id="school"
          name="school"
          value={formValues.school}
          onChange={(e) => handleChange("school", e)}
          submittedValue={submittedValues.school}
          isEditing={isEditing}
        />
        <DisplayInput
          label="Title of study:"
          type="text"
          id="study"
          name="study"
          value={formValues.study}
          onChange={(e) => handleChange("study", e)}
          submittedValue={submittedValues.study}
          isEditing={isEditing}
        />
        <DisplayInput
          label="Date of study:"
          type="date"
          id="date"
          name="date"
          value={formValues.date}
          onChange={(e) => handleChange("date", e)}
          submittedValue={submittedValues.date}
          isEditing={isEditing}
        />
        <button type="submit">{isEditing ? "Submit" : "Edit"}</button>
      </form>
    </div>
  );
}

export default Education;
