import { useState } from 'react';
import Form from './Form';
import { v4 as uuid } from 'uuid';

function List({ type, cvsubmit = false }) {
  if (type === 'edexperience') {
    const [exp, setExp] = useState(3);

    function updateExp() {
      setExp(exp + 1);
      expList.push(expForm);
    }

    let expList = [
      {
        id: uuid(),
        content: <Form type="edexperience" />,
      },
      {
        id: uuid(),
        content: <Form type="edexperience" />,
      },
      {
        id: uuid(),
        content: <Form type="edexperience" />,
      },
    ];

    const expForm = {
      id: uuid(),
      content: <Form type="edexperience" />,
    };

    return (
      <>
        <ul>
          {expList.map((exp) => (
            <li key={exp.id}>{exp.content}</li>
          ))}
        </ul>
        <button onClick={updateExp}>Add</button>
      </>
    );
  }
}

export default List;
