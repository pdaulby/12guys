import React from 'react';
import Store from '../store/Store';
import { StatBlock } from './StatBlock';
import { heightFromInches } from '../scripts/MathUtil';

export const ShowDetails: React.FC = () => { 
    let {feet, inches} = heightFromInches(Store.height);
    let age = Store.age!=0&&('Age: '+Store.age+'.');
    let professions = Store.professions.join(', ') + (Store.professions.length!=0?'.':'');
    return (<>
        <StatBlock {...Store.abilityScores!} />
        <div>{age} {feet}"{inches}'. {Store.weight} lb. {professions}</div>
        <div>Gold: {Store.money}</div>
        <div>Max health: {Store.maxHealth}</div>
  </>)
}