import React from 'react';
import './App.css';
import AbilityScores from './models/AbilityScores';
import TwelveGuys from './components/TwelveGuys';
import Store from './store/Store';
import { observer } from 'mobx-react';
import ChooseRace from './components/ChooseRace';
import { createViableScore } from './scripts/CalculateScores';
import { ChooseAllignment, RollDetails } from './components/RollDetails';
import { ShowDetails } from './components/ShowDetails';

const App: React.FC = () => 
  <div className="App">
    <Header />
    <Body /> 
  </div>;

const Body: React.FC = observer(() => {
  switch (Store.stage) {
    case 0:
     return (<ChooseRace/>);
    case 1:
      let scores: AbilityScores[] = Array.from(Array(12)).map(()=>createViableScore(Store.race!));
      return (<TwelveGuys scores={scores}></TwelveGuys>);
    case 2: 
      return <RollDetails />
    case 3: 
      return <ChooseAllignment />
    case 4: 
      return <ShowDetails />
  }
})


export default App;

const Header: React.FC = observer(() => <header className="App-header">{Store.race} {Store.className} </header>)