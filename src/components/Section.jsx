import Form from './Form';
import List from './List';

function Section({ type, cvsubmit = false }) {
  if (type === 'informations' || type === 'aboutme') {
    return (
      <section className={type}>
        <Form type={type} />
      </section>
    );
  } else {
    return (
      <section className={type}>
        <List type={type} />
      </section>
    );
  }
}

export default Section;
