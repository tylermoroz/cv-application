import "../styles/DisplayInput.css";

function DisplayInput({
  label,
  type = "text",
  id,
  name,
  textarea = false,
  value,
  onChange,
  submittedValue,
  isEditing,
}) {
  const InputField = textarea ? (
    <textarea id={id} name={name} value={value} onChange={onChange} />
  ) : (
    <input type={type} id={id} name={name} value={value} onChange={onChange} />
  );

  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      {isEditing ? InputField : <p>{submittedValue}</p>}
    </div>
  );
}

export default DisplayInput;
