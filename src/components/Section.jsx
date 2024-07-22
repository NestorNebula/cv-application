import { useState } from 'react';
import Form from './Form';
import List from './List';

function Section({ type, cvsubmit = false }) {
  const [submit, setSubmit] = useState(true);

  function updateSubmit() {
    setSubmit(!submit);
  }

  function checkType() {
    return type === 'informations' || type === 'aboutme' ? (
      <Form type={type} />
    ) : (
      <List type={type} />
    );
  }

  return (
    <section className={type}>
      {checkType()}
      <button onClick={updateSubmit}>Submit</button>
    </section>
  );
}

export default Section;
