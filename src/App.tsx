import React from 'react';
import './App.css';
import AbilityScores from './models/AbilityScores';
import TwelveGuys from './components/TwelveGuys';

function App() {
  let scores: AbilityScores[] = Array.from(Array(12)).map(createScores);
  return (
    <div className="App">
      <header className="App-header">
        <TwelveGuys scores={scores}></TwelveGuys>
      </header>
    </div>
  );
}

export default App;


function createScores(): AbilityScores {
  return {
    Strength: roll3D6(),
    Dexterity: roll3D6(),
    Constitution: roll3D6(),
    Intelligence: roll3D6(),
    Wisdom: roll3D6(),
    Charisma: roll3D6()
  };
}
function roll3D6(): number {
  return rollD6() + rollD6() + rollD6();
}
function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

function rollD4Minus1(): number {
  return Array.from(Array(4)).map(rollD6).sort((a, b)=>b-a).slice(0, 3).reduce((a,b)=>a+b, 0);
}
