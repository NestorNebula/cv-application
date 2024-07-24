import { useState } from 'react';
import Section from './components/Section';
import './App.css';

function App() {
  const [cvsubmit, setCvSubmit] = useState(false);

  function updateCvSubmit() {
    setCvSubmit(!cvsubmit);
  }
  return (
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
          <div className="submitbtndiv">
            <button className="cvsubmitbtn" onClick={updateCvSubmit}>
              Submit CV
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
