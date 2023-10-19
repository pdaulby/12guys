import React from 'react';
import './App.css';
import RollScores from './components/RollScores';
import Store from './store/Store';
import { observer } from 'mobx-react';
import ChooseRace from './components/ChooseRace';
import { ChooseAllignment, RollDetails } from './components/RollDetails';
import { ShowDetails } from './components/ShowDetails';
import ChooseMethod from './components/ChooseMethod';

const App: React.FC = () => 
  <div className="App">
    <Header />
    <Body /> 
  </div>;

const Body: React.FC = observer(() => {
  switch (Store.stage) {
    case -1: 
      return <ChooseMethod/>
    case 0:
     return <ChooseRace/>;
    case 1:
      return <RollScores/>
    case 2: 
      return <RollDetails/>
    case 3: 
      return <ChooseAllignment/>
    case 4: 
      return <ShowDetails/>
  }
})

export default App;

const Header: React.FC = observer(() => <header className="App-header">{Store.race} {Store.className} </header>)

