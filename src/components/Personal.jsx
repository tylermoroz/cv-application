// import "./styles/Personal.css";

function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <h1>Personal Information</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="phone">Phone Number:</label>
      <input type="text" id="phone" name="phone" />
    </div>
  );
}

export default PersonalInfo;
