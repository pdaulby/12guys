import React from 'react';
import Store from '../store/Store';
import { StatBlock } from './StatBlock';
import { getAge, getAgeCategory } from '../scripts/Age';
import { heightFromInches } from '../scripts/MathUtil';

export const RollDetails: React.FC = () => { 
    if (!Store.height) Store.calculateMiscValues();
    let age = getAge(Store.race!, Store.className!);
    let {feet, inches} = heightFromInches(Store.height);

    return (<>
        <StatBlock {...Store.abilityScores!} />
        <div>Age: {age}, {feet}"{inches}', {Store.weight} lb. {Store.professions.join(', ')}</div>
        <div>Starting gold: {Store.money}</div>
        <div>Starting health: {Store.maxHealth}</div>
        <div>Age category: {getAgeCategory(age, Store.race!)} <button onClick={()=>Store.increaseAge(age)}>apply age ability score modifications</button></div>
  </>)
}