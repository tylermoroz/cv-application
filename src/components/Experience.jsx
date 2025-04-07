import { useState } from "react";
import DisplayInput from "./DisplayInput.jsx";
import "../styles/Experience.css";

function Experience() {
  const [formValues, setFormValues] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [submittedValues, setSubmittedValues] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
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
    <div className="experience-container">
      <h1>Experience</h1>
      <form onSubmit={handleSubmit}>
        <DisplayInput
          label="Company:"
          type="text"
          id="company"
          name="company"
          value={formValues.company}
          onChange={(e) => handleChange("company", e)}
          submittedValue={submittedValues.company}
          isEditing={isEditing}
        />
        <DisplayInput
          label="Position:"
          type="text"
          id="position"
          name="position"
          value={formValues.position}
          onChange={(e) => handleChange("position", e)}
          submittedValue={submittedValues.position}
          isEditing={isEditing}
        />
        <DisplayInput
          label="Responsibilities:"
          id="responsibilities"
          name="responsibilities"
          textarea={true}
          value={formValues.responsibilities}
          onChange={(e) => handleChange("responsibilities", e)}
          submittedValue={submittedValues.responsibilities}
          isEditing={isEditing}
        />
        <DisplayInput
          label="Start date:"
          type="date"
          id="start-date"
          name="start-date"
          value={formValues.startDate}
          onChange={(e) => handleChange("startDate", e)}
          submittedValue={submittedValues.startDate}
          isEditing={isEditing}
        />
        <DisplayInput
          label="End date:"
          type="date"
          id="end-date"
          name="end-date"
          value={formValues.endDate}
          onChange={(e) => handleChange("endDate", e)}
          submittedValue={submittedValues.endDate}
          isEditing={isEditing}
        />
        <button type="submit">{isEditing ? "Submit" : "Edit"}</button>
      </form>
    </div>
  );
}

export default Experience;
