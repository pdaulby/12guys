import React from "react";
import AbilityScores from "../models/AbilityScores"
import { ChoosableStatBlock } from '../components/StatBlock';
import compareScores from '../scripts/SortScores';

const TwelveGuys: React.FC<{scores: AbilityScores[]}> =
 ({scores}) => {
    scores.sort(compareScores);
    return (
        <>
        {scores.map((s) => (<div><ChoosableStatBlock {...s} /></div>))}
        </>
    )
}

export default TwelveGuys;