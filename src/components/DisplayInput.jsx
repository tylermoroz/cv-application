import { useState } from "react";

function DisplayInput({ label, type = "text", id, name, textarea = false }) {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    e.target.style.display = "none";
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
        <button type="submit">Submit</button>
      </form>
      <p>{submittedValue}</p>
    </div>
  );
}

export default DisplayInput;
