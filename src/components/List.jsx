import { useState } from 'react';
import Form from './Form';
import { v4 as uuid } from 'uuid';
import '../styles/List.css';

function List({ type, submit, cvsubmit = false }) {
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
  function removeElement(e) {
    setList(list.filter((li) => li.id !== e.target.id));
  }

  return (
    <>
      <ul>
        {list.map((li) => (
          <li key={li.id}>
            <div className="listcontent">
              <Form type={type} submit={submit} id={li.id} />
              {submit ? null : (
                <button
                  className="removebtn"
                  id={li.id}
                  onClick={removeElement}
                >
                  Remove
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {submit ? null : (
        <button className="addbtn" onClick={updateList}>
          Add
        </button>
      )}
    </>
  );
}

export default List;
