function Input({ content, value, update, status }) {
  return (
    <>
      <label htmlFor={content}>{content}: </label>
      <input id={content} value={value} onChange={update}></input>
    </>
  );
}

export default Input;
