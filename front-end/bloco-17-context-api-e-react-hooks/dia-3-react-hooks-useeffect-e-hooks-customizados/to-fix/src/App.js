import './App.css';
import Number from './Number';
import React, { useState } from 'react';

function App() {
  const [button, setButton] = useState(true)
  return (
    <div className="App">
      <h1>Número</h1>
      {button && <Number />}
      <button onClick={() => setButton(!button)}>Stop</button>
    </div>
  );
}

export default App;
