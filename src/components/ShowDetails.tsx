import React from 'react';
import Store from '../store/Store';
import { StatBlock } from './StatBlock';
import { heightFromInches } from '../scripts/MathUtil';

export const ShowDetails: React.FC = () => { 
    let {feet, inches} = heightFromInches(Store.height);

    return (<>
        <StatBlock {...Store.abilityScores!} />
        <div>Age: {Store.age}, {feet}"{inches}', {Store.weight} lb. {Store.professions.join(', ')}</div>
        <div>Gold: {Store.money}</div>
        <div>Max health: {Store.maxHealth}</div>
  </>)
}