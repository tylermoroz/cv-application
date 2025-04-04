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
    <div>
      <label htmlFor={id}>{label}</label>
      {isEditing ? InputField : <p>{submittedValue}</p>}
    </div>
  );
}

export default DisplayInput;
