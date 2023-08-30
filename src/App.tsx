import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatBlock from './components/StatBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StatBlock Strength={18} Dexterity={17} Constitution={0} Intelligence={0} Wisdom={0} Charisma={0} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Resdddsdact
        </a>
      </header>
    </div>
  );
}

export default App;
