import { useState } from 'react';
import Form from './Form';
import List from './List';

function Section({ type, cvsubmit = false }) {
  const [submit, setSubmit] = useState(false);

  const headerName = type === 'aboutme' ? 'about me' : type;

  function updateSubmit() {
    setSubmit(!submit);
  }

  function checkType() {
    return type === 'informations' || type === 'aboutme' ? (
      <Form type={type} submit={submit} />
    ) : (
      <List type={type} submit={submit} />
    );
  }

  return (
    <section className={type}>
      <h2>{headerName}</h2>
      {checkType()}
      {submit ? (
        <button onClick={updateSubmit}>Edit</button>
      ) : (
        <button onClick={updateSubmit}>Submit</button>
      )}
    </section>
  );
}

export default Section;
