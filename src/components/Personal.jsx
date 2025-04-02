import DisplayInput from "./DisplayInput.jsx";
// import "./styles/Personal.css";

function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <h1>Personal Information</h1>
      <DisplayInput label="Name:" type="text" id="name" name="name" />
      <DisplayInput label="Email:" type="email" id="email" name="email" />
      <DisplayInput label="Phone:" type="tel" id="phone" name="phone" />
    </div>
  );
}

export default PersonalInfo;
