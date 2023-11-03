import React from 'react';
import './App.css';
import RollScores from './components/RollScores';
import Store from './store/Store';
import { observer } from 'mobx-react';
import RaceDetails from './components/RaceOverview';
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
    case "roll scores": 
      return <div className='two-cols'><RollScores/><RaceDetails/></div>
    case "roll details": 
      return <RollDetails/>
    case "choose allignment": 
      return <ChooseAllignment/>
    case "end": 
      return <ShowDetails/>
  }
})


export default App;

const Header: React.FC = observer(() => <header className="App-header">{/*Store.className && */(Store.race+" "+Store.className)} </header>)

