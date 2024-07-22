import { useState } from 'react';
import Form from './Form';
import { v4 as uuid } from 'uuid';

function List({ type, cvsubmit = false }) {
  if (type === 'edexperience') {
    const [expList, setExp] = useState([
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
    ]);

    function updateExp() {
      setExp([
        ...expList,
        {
          id: uuid(),
          content: <Form type="edexperience" />,
        },
      ]);
    }

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
