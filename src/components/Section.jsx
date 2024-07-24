import { useState } from 'react';
import Form from './Form';
import List from './List';
import editBtn from '../assets/edit.png';
import submitBtn from '../assets/submit.png';
import '../styles/Section.css';

function Section({ type, cvsubmit = false }) {
  const [submit, setSubmit] = useState(false);

  const headerName = type === 'aboutme' ? 'about me' : type;

  function updateSubmit() {
    setSubmit(!submit);
  }

  function checkType() {
    return type === 'informations' || type === 'aboutme' ? (
      <Form type={type} submit={submit || cvsubmit} />
    ) : (
      <List type={type} submit={submit || cvsubmit} />
    );
  }

  return (
    <section className={type}>
      {cvsubmit && type === 'informations' ? null : (
        <h2 className={headerName + 'h2'}>{headerName}</h2>
      )}
      {checkType()}
      {cvsubmit ? null : submit ? (
        <button className="editbtn" onClick={updateSubmit}>
          <img src={editBtn} alt={`edit ${headerName}`}></img>
        </button>
      ) : (
        <button className="updatebtn" onClick={updateSubmit}>
          <img src={submitBtn} alt={`submit ${headerName}`}></img>
        </button>
      )}
    </section>
  );
}

export default Section;
