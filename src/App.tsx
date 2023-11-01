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
    case "choose method": 
      return <ChooseMethod/>
    case "choose race":
     return <ChooseRace/>;
    case "choose class":
      return <RollScores/>
    case "roll details": 
      return <RollDetails/>
    case "choose allignment": 
      return <ChooseAllignment/>
    case "end": 
      return <ShowDetails/>
  }
})


export default App;

const Header: React.FC = observer(() => <header className="App-header">{Store.race} {Store.className} </header>)

