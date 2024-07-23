import { useState } from 'react';
import Form from './Form';
import List from './List';
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
      <h2>{headerName}</h2>
      {checkType()}
      {cvsubmit ? null : submit ? (
        <button className="editbtn" onClick={updateSubmit}>
          Edit
        </button>
      ) : (
        <button className="updatebtn" onClick={updateSubmit}>
          Submit
        </button>
      )}
    </section>
  );
}

export default Section;
