function Input({ content, label, value, update, status }) {
  return (
    <>
      <label htmlFor={content}>{label}: </label>
      <input id={content} value={value} onChange={update}></input>
    </>
  );
}

export default Input;
