import { useState } from 'react';
import Input from './Input';
import '../styles/Form.css';

function Form({ type, id, submit, cvsubmit = false }) {
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
    {
      content: 'address',
      label: 'Address',
      type: 'input',
    },
  ];
  const education = [
    {
      content: 'study',
      label: 'Title of Study',
      type: 'input',
    },
    {
      content: 'schoolname',
      label: 'School Name',
      type: 'input',
    },
    {
      content: 'studyperiod',
      label: 'Study Period',
      type: 'input',
    },
  ];
  const experience = [
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
  const aboutme = [
    {
      content: 'aboutme',
      label: 'About me',
      type: 'textarea',
    },
  ];
  let section;
  switch (type) {
    case 'informations':
      section = informations;
      break;
    case 'education':
      section = education;
      break;
    case 'experience':
      section = experience;
      break;
    case 'skills':
      section = skills;
      break;
    default:
      section = aboutme;
  }

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');

  const values = [first, second, third, fourth];

  const updates = [
    function updateFirst(e) {
      setFirst(e.target.value);
    },

    function updateSecond(e) {
      setSecond(e.target.value);
    },

    function updateThird(e) {
      setThird(e.target.value);
    },

    function updateFourth(e) {
      setFourth(e.target.value);
    },
  ];

  function changeAreaHeight(e) {
    e.target.style.height =
      e.target.scrollHeight > e.target.clientHeight
        ? e.target.scrollHeight + 'px'
        : 'auto';
  }

  function populateForm() {
    const formContent = [];
    for (let i = 0; i < section.length; i++) {
      if (section[i].type === 'textarea') {
        if (submit === true) {
          formContent.push(
            <p className="paragraph" key={section[i].content + id}>
              {values[i]}
            </p>
          );
        } else {
          formContent.push(
            <div className="areadiv" key={section[i].content + id}>
              <textarea
                className={section[i].content}
                id={section[i].content + id}
                rows={1}
                onKeyUp={changeAreaHeight}
                placeholder=""
                value={values[i]}
                onChange={updates[i]}
              ></textarea>
              <label
                className="arealabel"
                key={section[i].content + 'label' + id}
                htmlFor={section[i].content + id}
              >
                {section[i].label}
              </label>
            </div>
          );
        }
      } else {
        if (submit === true) {
          formContent.push(
            <div className={section[i].content} key={section[i].content + id}>
              {values[i]}
            </div>
          );
        } else {
          formContent.push(
            <Input
              className={section[i].content}
              content={section[i].content + id}
              label={section[i].label}
              value={values[i]}
              update={updates[i]}
              key={section[i].content + id}
            />
          );
        }
      }
    }
    return formContent;
  }

  return <form className={type}>{populateForm().map((part) => part)}</form>;
}

export default Form;
