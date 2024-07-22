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
}

export default Form;
