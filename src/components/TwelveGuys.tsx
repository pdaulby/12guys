import React from "react";
import AbilityScores from "../models/AbilityScores"
import StatBlock from '../components/StatBlock';
import compareScores from '../scripts/SortScores';

const TwelveGuys: React.FC<{scores: AbilityScores[]}> =
 ({scores}) => {
    scores.sort(compareScores);
    return (
        <>
        {scores.map((s) => (<div><StatBlock {...s} /></div>))}
        </>
    )
}

export default TwelveGuys;