import React from 'react';
import Store from '../store/Store';
import { getAge, getAgeCategory } from '../scripts/Age';
import { ShowDetails } from './ShowDetails';

export const RollDetails: React.FC = () => { 
  if (!Store.height) Store.calculateMiscValues();
  let age = getAge(Store.race!, Store.className!);
  return (<>
    <ShowDetails/>
    <div>Age: {age} - {getAgeCategory(age, Store.race!)} <button onClick={()=>Store.increaseAge(age)}>apply age ability score modifications</button></div>
  </>)
}

export const ChooseAllignment: React.FC = () => {
  return (<>
    <ShowDetails />
    choose allignment lmao
  </>)
}