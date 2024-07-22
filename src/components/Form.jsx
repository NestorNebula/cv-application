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
        <Input content="name" label="Name" value={name} update={updateName} />
        <Input
          content="email"
          label="Email"
          value={email}
          update={updateEmail}
        />
        <Input
          content="phonenumber"
          label="Phone number"
          value={phone}
          update={updatePhone}
        />
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
  if (type === 'edexperience') {
    const [schoolName, setSchoolName] = useState('');
    const [study, setStudy] = useState('');
    const [studyDate, setStudyDate] = useState('');

    function updateSchoolName(e) {
      setSchoolName(e.target.value);
    }

    function updateStudy(e) {
      setStudy(e.target.value);
    }

    function updateStudyDate(e) {
      setStudyDate(e.target.value);
    }

    return (
      <form>
        <Input
          content="schoolname"
          label="School Name"
          value={schoolName}
          update={updateSchoolName}
        />
        <Input
          content="study"
          label="Study"
          value={study}
          update={updateStudy}
        />
        <Input
          content="studydate"
          label="Study Date"
          value={studyDate}
          update={setStudyDate}
        />
      </form>
    );
  }
}

export default Form;
