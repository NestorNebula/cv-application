import { useState } from 'react';
import Section from './components/Section';
import './App.css';

function App() {
  const [cvsubmit, setCvSubmit] = useState(false);

  function updateCvSubmit() {
    setCvSubmit(!cvsubmit);
  }
  return (
    <>
      <Section type="informations" cvsubmit={cvsubmit} />
      <Section type="education" cvsubmit={cvsubmit} />
      <Section type="experience" cvsubmit={cvsubmit} />
      <Section type="aboutme" cvsubmit={cvsubmit} />
      <Section type="skills" cvsubmit={cvsubmit} />
      {cvsubmit ? null : (
        <button className="cvsubmitbtn" onClick={updateCvSubmit}>
          Submit CV
        </button>
      )}
    </>
  );
}

export default App;
