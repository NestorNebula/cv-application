function Input({ content, label, value, update, className, status }) {
  return (
    <div className={className}>
      <label className="inputlabel" htmlFor={content}>
        {label + ': '}
      </label>
      <input id={content} value={value} onChange={update}></input>
    </div>
  );
}

export default Input;
