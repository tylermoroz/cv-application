import { useState } from "react";

function DisplayInput({ label, type = "text", id, name, textarea = false }) {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [buttonFunction, setButtonFunction] = useState("Submit");

  const handleInput = (e) => {
    e.preventDefault();
    if (buttonFunction === "Submit") {
      setSubmittedValue(inputValue);
      e.target.children[1].style.display = "none";
      setButtonFunction("Edit");
    } else if (buttonFunction === "Edit") {
      e.target.children[1].style.display = "block";
      setButtonFunction("Submit");
    }
  };

  const InputField = textarea ? (
    <textarea
      id={id}
      name={name}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  ) : (
    <input
      type={type}
      id={id}
      name={name}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );

  return (
    <div>
      <form onSubmit={handleInput}>
        <label htmlFor={id}>{label}</label>
        {InputField}
        <button type="submit">{buttonFunction}</button>
      </form>
      <p>{submittedValue}</p>
    </div>
  );
}

export default DisplayInput;
