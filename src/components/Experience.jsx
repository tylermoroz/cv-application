// import "./styles/Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <label htmlFor="company">Company:</label>
      <input type="text" id="company" name="company" />
      <label htmlFor="position">Position:</label>
      <input type="text" id="position" name="position" />
      <label htmlFor="responsibilities">Responsibilities:</label>
      <input type="text" id="responsibilities" name="responsibilities" />
      <label htmlFor="date-started">Date started:</label>
      <input type="text" id="date-started" name="date-started" />
      <label htmlFor="date-ended">Date ended:</label>
      <input type="text" id="date-ended" name="date-ended" />
    </div>
  );
}

export default Experience;
