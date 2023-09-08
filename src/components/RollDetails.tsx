import React from 'react';
import Store from '../store/Store';
import { StatBlock } from './StatBlock';
import { getAge } from '../scripts/Age';
import StartingMoney from '../scripts/StartingMoney';

export const RollDetails: React.FC = () => { 
    let age = getAge(Store.race!, Store.className!);
    let money = StartingMoney(Store.className!);
    return (<>
    <StatBlock {...Store.abilityScores!} />
    <div>age: {age}</div>
    <div>starting money: {money}</div>
  </>)
}
