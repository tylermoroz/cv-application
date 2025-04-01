import "./styles/App.css";
import PersonalInfo from "./components/Personal.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <div className="app-container">
      <h1>CV Application</h1>
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
