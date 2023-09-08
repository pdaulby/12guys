import React from 'react';
import Store from '../store/Store';
import { StatBlock } from './StatBlock';
import { getAge } from '../scripts/Age';

export const RollDetails: React.FC = () => { 

    return (<>
    <StatBlock {...Store.abilityScores!} />
    <Age></Age>
  </>)
}

const Age = () => {
    if (Store.age)
        return <div></div>

    return <div>age: {getAge(Store.race!, Store.className!)}</div>
}

