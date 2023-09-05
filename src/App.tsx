import React from 'react';
import './App.css';
import AbilityScores from './models/AbilityScores';
import TwelveGuys from './components/TwelveGuys';
import Store from './store/Store';
import { observer } from 'mobx-react';
import { Race } from './models/Race';
import ChooseRace from './components/ChooseRace';

const App: React.FC = observer(() => {
  //Store.staged is referenced here to make the observables active
  return (
    <div className="App">
      <Header />
      <Body stage={Store.stage} /> 
    </div>
  );
});

const Body: React.FC<{stage: 0 | 1}> = ({stage}) => {
  switch (stage) {
    case 0:
     return (<ChooseRace/>);
    case 1:
      let scores: AbilityScores[] = Array.from(Array(12)).map(createScores);
      return (<TwelveGuys scores={scores}></TwelveGuys>);
  }
}


export default App;

const Header: React.FC = () => {
  return (<header className="App-header">
  {Store.stage}  Race: {Store.race}
  </header>)
}

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
