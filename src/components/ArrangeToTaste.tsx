import React from "react";
import { AbilityNames, SixNumbers } from "../models/AbilityScores"

import { observer } from "mobx-react";
import Store from "../store/Store";
import { RaceClassRestrictions, RacialScoreMax, RacialScoreMin } from "../models/Race";
import { possibleClasses } from "../scripts/MinimumScores";
import ArrangeStore from "../store/ArrangeStore"
import Button from "./Button";

const ArrangeToTaste: React.FC<{scores: SixNumbers}> = observer(({scores}) => {
    let raceClasses = RaceClassRestrictions.get(Store.race!)!;
    let min = RacialScoreMin.get(Store.race!)!;
    let max = RacialScoreMax.get(Store.race!)!;
    let classes = possibleClasses(scores, raceClasses)
    return <div className="arrange-to-taste">
        <div className="StatBox">
            <div>ability</div>
            <div>value</div>
            <div className="ScoreModifier">range</div>
            <div>select</div>
        </div>
        {AbilityNames.map(ability=>
        <div className="StatBox" key={ability}>
            <div>{ability.slice(0,3)}</div>
            <div>{ArrangeStore.chosenScores[ability]}</div>
            <div className="ScoreModifier">{min[ability]}-{max[ability]}</div>
            <div><Button onClick={()=>ArrangeStore.setScore(ability)}>set <b>{ArrangeStore.choosableValues[0]??0}</b></Button></div>
        </div>
        )}
        <div>{ArrangeStore.choosableValues}</div>
        <div>{classes}</div>
    </div>
});

export default ArrangeToTaste;