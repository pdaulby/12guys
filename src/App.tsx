import React from 'react';
import './App.css';
import StatBlock from './components/StatBlock';
import AbilityScores from './models/AbilityScores';
import compareScores from './scripts/SortScores';

function App() {
  let scores: AbilityScores[] = Array.from(Array(12)).map(createScores);
  scores.sort(compareScores)
  return (
    <div className="App">
      <header className="App-header">
        {scores.map((s) => (<div><StatBlock {...s} /></div>))}
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
