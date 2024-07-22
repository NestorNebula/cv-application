import { useState } from 'react';
import Input from './Input';

function Form({ type, id, cvsubmit = false }) {
  const informations = [
    {
      content: 'name',
      label: 'Name',
    },
    {
      content: 'email',
      label: 'Email',
    },
    {
      content: 'phone',
      label: 'Phone',
    },
  ];
  const edexperience = [
    {
      content: 'schoolname',
      label: 'School Name',
    },
    {
      content: 'study',
      label: 'Study',
    },
    {
      content: 'studyperiod',
      label: 'Study Period',
    },
  ];
  const jobexperience = [
    {
      content: 'position',
      label: 'Position Title',
    },
    {
      content: 'company',
      label: 'Company',
    },
    {
      content: 'jobperiod',
      label: 'Job Period',
    },
    {
      content: 'description',
      label: 'Description',
    },
  ];
  let section;
  switch (type) {
    case 'informations':
      section = informations;
      break;
    case 'edexperience':
      section = edexperience;
      break;
    case 'jobexperience':
      section = jobexperience;
      break;
    default:
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
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');

  function updateFirst(e) {
    setFirst(e.target.value);
  }

  function updateSecond(e) {
    setSecond(e.target.value);
  }

  function updateThird(e) {
    setThird(e.target.value);
  }

  function updateFourth(e) {
    setFourth(e.target.value);
  }

  function checkDesc() {
    if (section[3]) {
      return (
        <>
          <label htmlFor={section[3].content + id}>{section[3].label}</label>
          <textarea
            id={section[3].content + id}
            value={fourth}
            onChange={updateFourth}
          ></textarea>
        </>
      );
    }
  }

  return (
    <form>
      <Input
        content={section[0].content + id}
        label={section[0].label}
        value={first}
        update={updateFirst}
      />
      <Input
        content={section[1].content + id}
        label={section[1].label}
        value={second}
        update={updateSecond}
      />
      <Input
        content={section[2].content + id}
        label={section[2].label}
        value={third}
        update={updateThird}
      />
      {checkDesc()}
    </form>
  );

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
