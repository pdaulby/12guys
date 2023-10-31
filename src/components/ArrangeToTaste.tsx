import React from "react";
import { AbilityNames } from "../models/AbilityScores"
import { observer } from "mobx-react";
import Store from "../store/Store";
import { RacialScoreAdjustment, RacialScoreMax, RacialScoreMin } from "../models/Race";
import ArrangeStore from "../store/ArrangeStore"
import Button from "./Button";
import { minMax } from "../scripts/MathUtil";

const ArrangeToTaste: React.FC = observer(() => {

    let min = RacialScoreMin.get(Store.race!)!;
    let max = RacialScoreMax.get(Store.race!)!;
    let adjustment = RacialScoreAdjustment.get(Store.race!)!;
    return <div className="arrange-to-taste">
        <div className="StatBox">
            <div>ability</div>
            <div>value</div>
            <div className="ScoreModifier">range</div>
            <div>select</div>
        </div>
        {AbilityNames.map(ability=>
        <div className="StatBox" key={ability}>
            <div>{ability.slice(0,3)} {adjustmentVisual(adjustment[ability])}</div>
            <div>{ArrangeStore.chosenScores[ability]} <small>({minMax(min[ability], max[ability], ArrangeStore.chosenScores[ability]+adjustment[ability])})</small></div>
            <div className="ScoreModifier">{min[ability]}-{max[ability]}</div>
            <div><Button onClick={()=>ArrangeStore.setScore(ability)}>set <b>{ArrangeStore.choosableValues[0]??0}</b></Button></div>
        </div>
        )}
        <div>{(ArrangeStore.choosableValues.length != 0) && "Remaining Scores: "}{ArrangeStore.choosableValues.join(', ')}</div>
        <div>{ArrangeStore.possibleClasses.join(', ')}</div>
    </div>
});

const adjustmentVisual = (a: number): string => {
  if (!a) return "";
  if (a > 0) return "+"+a;
  return a.toString();
}

export default ArrangeToTaste;