import { useState } from 'react';
import Form from './Form';
import { v4 as uuid } from 'uuid';

function List({ type, cvsubmit = false }) {
  const [list, setList] = useState([
    {
      id: uuid(),
    },
    {
      id: uuid(),
    },
    {
      id: uuid(),
    },
  ]);

  function updateList() {
    setList([
      ...list,
      {
        id: uuid(),
      },
    ]);
  }

  return (
    <>
      <ul>
        {list.map((li) => (
          <li key={li.id}>
            <Form type={type} id={li.id} />
          </li>
        ))}
      </ul>
      <button onClick={updateList}>Add</button>
    </>
  );
}

export default List;
