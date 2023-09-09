import React from 'react';
import './App.css';
import AbilityScores from './models/AbilityScores';
import TwelveGuys from './components/TwelveGuys';
import Store from './store/Store';
import { observer } from 'mobx-react';
import ChooseRace from './components/ChooseRace';
import { createViableScore } from './scripts/CalculateScores';
import { RollDetails } from './components/RollDetails';

const App: React.FC = observer(() => {
  //Store.staged is referenced here to make the observables active
  return (
    <div className="App">
      <Header />
      <Body stage={Store.stage} /> 
    </div>
  );
});

const Body: React.FC<{stage: 0 | 1 | 2 | 3}> = ({stage}) => {
  switch (stage) {
    case 0:
     return (<ChooseRace/>);
    case 1:
      let scores: AbilityScores[] = Array.from(Array(12)).map(()=>createViableScore(Store.race!));
      return (<TwelveGuys scores={scores}></TwelveGuys>);
    case 2: 
      return <RollDetails />
    case 3: 
      return <></>
  }
}


export default App;

const Header: React.FC = () => <header className="App-header">{Store.stage} {Store.race} {Store.className} </header>