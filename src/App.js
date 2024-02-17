import React from 'react';
import './App.css';
import Translator from './translator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Literal Translator</h1>
        <p>This isn't 100% accurate, it's just a good exercise for memorising word positions in the sentence!</p>
        <Translator />
      </header>
      <p>Created by Theodore Palmer</p>
    </div>
  );
}

export default App;
