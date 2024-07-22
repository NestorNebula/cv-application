import { useState } from 'react';
import Form from './Form';
import { v4 as uuid } from 'uuid';

function List({ type, cvsubmit = false }) {
  const [list, setList] = useState([
    {
      id: uuid(),
      content: <Form type={type} />,
    },
    {
      id: uuid(),
      content: <Form type={type} />,
    },
    {
      id: uuid(),
      content: <Form type={type} />,
    },
  ]);

  function updateList() {
    setList([
      ...list,
      {
        id: uuid(),
        content: <Form type={type} />,
      },
    ]);
  }

  return (
    <>
      <ul>
        {list.map((li) => (
          <li key={li.id}>{li.content}</li>
        ))}
      </ul>
      <button onClick={updateList}>Add</button>
    </>
  );
}

export default List;
