import '../styles/Input.css';

function Input({ content, label, value, update, className, status }) {
  return (
    <div className="input" id={className + 'input'}>
      <input id={content} value={value} onChange={update}></input>
      <label className="inputlabel" htmlFor={content}>
        {label + ': '}
      </label>
    </div>
  );
}

export default Input;
