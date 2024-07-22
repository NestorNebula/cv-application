import { useState } from 'react';
import Input from './Input';

function Form({ type, cvsubmit = false }) {
  if (type === 'informations') {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function updateName(e) {
      setName(e.target.value);
    }

    function updateEmail(e) {
      setEmail(e.target.value);
    }

    function updatePhone(e) {
      setPhone(e.target.value);
    }
    return (
      <form>
        <Input content="Name" value={name} update={updateName} />
        <Input content="Email" value={email} update={updateEmail} />
        <Input content="Phone number" value={phone} update={updatePhone} />
      </form>
    );
  }
  if (type === 'aboutme') {
    const [text, setText] = useState('');

    function updateText(e) {
      setText(e.target.value);
      console.log(text);
    }
    return (
      <form>
        <label htmlFor="aboutme">About me: </label>
        <textarea id="aboutme" value={text} onChange={updateText}></textarea>
      </form>
    );
  }
}

export default Form;
