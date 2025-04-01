// import "./styles/Education.css";

function Education() {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <label htmlFor="school">School:</label>
      <input type="text" id="school" name="school" />
      <label htmlFor="title-of-study">Title of study</label>
      <input type="text" id="title-of-study" name="title-of-study" />
      <label htmlFor="date-of-study">Date of study:</label>
      <input type="text" id="date-of-study" name="date-of-study" />
    </div>
  );
}

export default Education;
