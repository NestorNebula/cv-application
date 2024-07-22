import { useState } from 'react';
import Input from './Input';

function Form({ type, id, cvsubmit = false }) {
  const informations = [
    {
      content: 'name',
      label: 'Name',
      type: 'input',
    },
    {
      content: 'email',
      label: 'Email',
      type: 'input',
    },
    {
      content: 'phone',
      label: 'Phone',
      type: 'input',
    },
  ];
  const edexperience = [
    {
      content: 'schoolname',
      label: 'School Name',
      type: 'input',
    },
    {
      content: 'study',
      label: 'Study',
      type: 'input',
    },
    {
      content: 'studyperiod',
      label: 'Study Period',
      type: 'input',
    },
  ];
  const jobexperience = [
    {
      content: 'position',
      label: 'Position Title',
      type: 'input',
    },
    {
      content: 'company',
      label: 'Company',
      type: 'input',
    },
    {
      content: 'jobperiod',
      label: 'Job Period',
      type: 'input',
    },
    {
      content: 'description',
      label: 'Description',
      type: 'textarea',
    },
  ];
  const skills = [
    {
      content: 'skill',
      label: 'Skill',
      type: 'input',
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
    case 'skills':
      section = skills;
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

  function checkContent(index, value, onChange) {
    if (section[index]) {
      if (section[index].type === 'textarea') {
        return (
          <>
            <label htmlFor={section[index].content + id}>
              {section[index].label}
            </label>
            <textarea
              id={section[index].content + id}
              value={value}
              onChange={onChange}
            ></textarea>
          </>
        );
      } else {
        return (
          <Input
            content={section[index].content + id}
            label={section[index].label}
            value={value}
            update={onChange}
          />
        );
      }
    }
  }

  return (
    <form>
      {checkContent(0, first, updateFirst)}
      {checkContent(1, second, updateSecond)}
      {checkContent(2, third, updateThird)}
      {checkContent(3, fourth, updateFourth)}
    </form>
  );
}

export default Form;
