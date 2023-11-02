import React from "react";
import { AbilityNames } from "../models/AbilityScores"
import { observer } from "mobx-react";
import ArrangeStore from "../store/ArrangeStore"
import Button from "./Button";
import { ChoosableClasses } from "./StatBlock";

const ArrangeToTaste: React.FC = observer(() => {

    return <div className="arrange-to-taste">
        {AbilityNames.map(ability=>
        <div className="StatBox" key={ability}>
            <div>{ability.slice(0,3)}</div>
            <div>{ArrangeStore.chosenScores[ability]} </div>
            <div>
              <Button onClick={()=>ArrangeStore.setScore(ability)}>
                <big><b>{ArrangeStore.choosableValues[0]??0}</b></big>
              </Button>
            </div>
        </div>
        )}
        <div>{(ArrangeStore.choosableValues.length != 0) && "Remaining Scores: "}{ArrangeStore.choosableValues.join(', ')}</div>
        <ChoosableClasses scores={ArrangeStore.chosenScores}/>
        <div>{ArrangeStore.possibleClasses.join(', ')}</div>
    </div>
});

const adjustmentVisual = (a: number): string => {
  if (!a) return "";
  if (a > 0) return "+"+a;
  return a.toString();
}

export default ArrangeToTaste;