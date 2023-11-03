import React from "react";
import { AbilityNames } from "../models/AbilityScores"
import { observer } from "mobx-react";
import ArrangeStore from "../store/ArrangeStore"
import Button from "./Button";
import { ChoosableClasses } from "./StatBlock";
import { createAdjustedScore } from "../scripts/CalculateScores";
import store from "../store/Store";

const ArrangeToTaste: React.FC = observer(() => {
    let adjustedScores = ArrangeStore.scoresChosen 
      ? createAdjustedScore(store.race, ArrangeStore.chosenScores)
      : ArrangeStore.chosenScores;
    
    return <div className="arrange-to-taste">
        {AbilityNames.map(ability=>
          <div className="StatBox" key={ability}>
              <div>{ability.slice(0,3)}</div>
              <div>{adjustedScores[ability]} </div>
              <div>
                <Button onClick={()=>ArrangeStore.setScore(ability)}>
                  <big><b>{ArrangeStore.choosableValues[0]??0}</b></big>
                </Button>
              </div>
          </div>
        )}
        <div>{(ArrangeStore.choosableValues.length != 0) && "Remaining Scores: "}{ArrangeStore.choosableValues.join(', ')}</div>
        <ChoosableClasses scores={ArrangeStore.chosenScores}/>
        {ArrangeStore.scoresChosen && "TODO show class minimums lol"}
    </div>
});

export default ArrangeToTaste;