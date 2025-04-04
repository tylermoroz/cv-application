import { useState } from "react";
import DisplayInput from "./DisplayInput.jsx";
// import "./styles/Personal.css";

function PersonalInfo() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submittedValues, setSubmittedValues] = useState({
    name: "",
    email: "",
    phone: "",
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
    <div className="personal-info-container">
      <h1>Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <DisplayInput
          label="Name:"
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={(e) => handleChange("name", e)}
          submittedValue={submittedValues.name}
          isEditing={isEditing}
        />
        <DisplayInput
          label="Email:"
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={(e) => handleChange("email", e)}
          submittedValue={submittedValues.email}
          isEditing={isEditing}
        />
        <DisplayInput
          label="Phone:"
          type="tel"
          id="phone"
          name="phone"
          value={formValues.phone}
          onChange={(e) => handleChange("phone", e)}
          submittedValue={submittedValues.phone}
          isEditing={isEditing}
        />
        <button type="submit">{isEditing ? "Submit" : "Edit"}</button>
      </form>
    </div>
  );
}

export default PersonalInfo;
