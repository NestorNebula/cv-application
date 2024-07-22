import { useState } from 'react';
import Input from './Input';

function Form({ type, id, cvsubmit = false }) {
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
          content={`schoolname${id}`}
          label="School Name"
          value={schoolName}
          update={updateSchoolName}
        />
        <Input
          content={`study${id}`}
          label="Study"
          value={study}
          update={updateStudy}
        />
        <Input
          content={`studydate${id}`}
          label="Study Date"
          value={studyDate}
          update={updateStudyDate}
        />
      </form>
    );
  }

  if (type === 'jobexperience') {
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [jobDate, setJobDate] = useState('');
    const [description, setDescription] = useState('');

    function updatePosition(e) {
      setPosition(e.target.value);
    }

    function updateCompany(e) {
      setCompany(e.target.value);
    }

    function updateJobDate(e) {
      setJobDate(e.target.value);
    }

    function updateDescription(e) {
      setDescription(e.target.value);
    }

    return (
      <form>
        <Input
          content={`position${id}`}
          label="Position Title"
          value={position}
          update={updatePosition}
        />
        <Input
          content={`company${id}`}
          label="Company"
          value={company}
          update={updateCompany}
        />
        <Input
          content={`jobdate${id}`}
          label="Job Date"
          value={jobDate}
          update={updateJobDate}
        />
        <label htmlFor={`desc${id}`}>Description: </label>
        <textarea
          id={`desc${id}`}
          value={description}
          onChange={updateDescription}
        ></textarea>
      </form>
    );
  }
}

export default Form;
