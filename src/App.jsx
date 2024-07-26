import { useState } from 'react';
import Section from './components/Section';
import Dialog from './components/Dialog';
import './App.css';

function App() {
  const [cvsubmit, setCvSubmit] = useState(false);

  function updateCvSubmit() {
    setCvSubmit(!cvsubmit);
  }
  return (
    <>
      <div className="cv">
        <main>
          <div className="aside">
            <Section type="informations" cvsubmit={cvsubmit} />
            <Section type="skills" cvsubmit={cvsubmit} />
          </div>
          <div className="mainsection">
            <Section type="aboutme" cvsubmit={cvsubmit} />
            <Section type="education" cvsubmit={cvsubmit} />
            <Section type="experience" cvsubmit={cvsubmit} />
          </div>
          {cvsubmit ? null : (
            <div className="cvbuttons">
              <Dialog />
              <button className="cvsubmitbtn" onClick={updateCvSubmit}>
                Submit CV
              </button>
            </div>
          )}
        </main>
      </div>
      <div className="credits">
        <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">
          Tick icons created by Roundicons - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">
          Plus icons created by kliwir art - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/subtract"
          title="subtract icons"
        >
          Subtract icons created by Fathema Khanom - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/pencil"
          title="pencil icons"
        >
          Pencil icons created by riajulislam - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/cv" title="cv icons">
          Cv icons created by Freepik - Flaticon
        </a>
      </div>
    </>
  );
}

export default App;
