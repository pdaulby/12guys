import React from 'react';
import Store from '../store/Store';
import { StatBlock } from './StatBlock';
import { getAge } from '../scripts/Age';
import StartingMoney from '../scripts/StartingMoney';
import { InnissHeightAndWeight } from '../scripts/HeightWeight';
import { heightFromInches } from '../scripts/MathUtil';

export const RollDetails: React.FC = () => { 
    let age = getAge(Store.race!, Store.className!);
    let money = StartingMoney(Store.className!);
    let {height, weight} = InnissHeightAndWeight(Store.race!, Store.abilityScores!);
    let {feet, inches} = heightFromInches(height);

    return (<>
        <StatBlock {...Store.abilityScores!} />
        <div>age: {age}</div>
        <div>starting money: {money}</div>
        <div>height: {feet} foot {inches}</div>
        <div>weight: {weight} lbs</div>
  </>)
}
