import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import './App.css';
import './html.png'

const icons = [
  
  { src: 'html.png', alt: 'html' },
  { src: 'css-icon.png', alt: 'css' },
  { src: 'java-icon.png', alt: 'java' },
  { src: 'cpp-icon.png', alt: 'cpp' },
  { src: 'python-icon.png', alt: 'python' },
  { src: 'go-icon.png', alt: 'go' },
  { src: 'js-icon.png', alt: 'javascript' },
];

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    // Simulate running code
    setOutput(code);
  };

  const clearOutput = () => {
    setOutput('');
  };

  return (
    <div className="app">
      <div className="sidebar">
        {icons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} className="icon" />
        ))}
      </div>
      <div className="main">
        <div className="editor-output-container">
          <div className="editor-section">
            <div className="editor-title-container">
              <div className="editor-title">main.js</div>
              <button className="run-button" onClick={runCode}>
                Run
              </button>
            </div>
            <AceEditor
              mode="javascript"
              theme="github"
              name="codeEditor"
              fontSize={14}
              value={code}
              onChange={(value) => setCode(value)}
              editorProps={{ $blockScrolling: true }}
              className="editor"
            />
          </div>
          <div className="output-section">
            <div className="output-title-container">
              <h2 className="output-title">Output</h2>
              <button className="clear-button" onClick={clearOutput}>
                Clear
              </button>
            </div>
            <div className="output">
              <pre>{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
