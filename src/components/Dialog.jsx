import { useState } from 'react';
import addBtn from '../assets/add.png';
import removeBtn from '../assets/remove.png';
import editBtn from '../assets/edit.png';
import submitBtn from '../assets/submit.png';
import '../styles/Dialog.css';

function Dialog() {
  const [open, setOpen] = useState(false);

  function openDialog() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  return (
    <>
      <button className="helpbtn" onClick={openDialog}>
        Help
      </button>
      <dialog open={open}>
        <div className="dialogcontent">
          <h3>CV Application</h3>
          <div>
            This page allows you to create a CV by typing your informations.
          </div>
          <div>
            Enter each informations that suits into your CV and leave blank the
            inputs that doesn't make sense. (You can also remove some by
            clicking on <img src={removeBtn} alt="remove button" />)
          </div>
          <div>
            For some sections (Skills, Education and Experience) you can add
            more of them by clicking on <img src={addBtn} alt="add button" />.
          </div>
          <div>
            When you entered all the informations in a section, you can click on{' '}
            <img src={submitBtn} alt="submit button" />. This will give you a
            preview of what this part of the CV will look like.
          </div>
          <div>
            When clicked, the <img src={submitBtn} alt="submit button" /> will
            be replaced by <img src={editBtn} alt="edit button" />. You can
            click on this button to go back and edit the informations.
          </div>
          <div>
            Finally, when you entered all of your informations and are satisfied
            with the preview, you can click on "Submit CV" to see your completed
            CV!{' '}
            <div className="important">
              Please note that it will consider the CV as completed and that you
              will not be able to modify it anymore.
            </div>
          </div>
          <button onClick={closeDialog}>Close</button>
        </div>
      </dialog>
    </>
  );
}

export default Dialog;
