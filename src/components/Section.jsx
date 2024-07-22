import { useState } from 'react';
import Form from './Form';
import List from './List';

function Section({ type, cvsubmit = false }) {
  const [submit, setSubmit] = useState(true);

  function updateSubmit() {
    setSubmit(!submit);
  }
  if (type === 'informations' || type === 'aboutme') {
    return (
      <section className={type}>
        <Form type={type} />
        <button onClick={updateSubmit}>Submit</button>
      </section>
    );
  } else {
    return (
      <section className={type}>
        <List type={type} />
        <button onClick={updateSubmit}>Submit</button>
      </section>
    );
  }
}

export default Section;
