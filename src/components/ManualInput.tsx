import React, { useState } from "react";
import AbilityScores, { AbilityName, AbilityNames } from "../models/AbilityScores"
import { observer } from "mobx-react";
import Button from "./Button";
import { ChoosableClasses } from "./StatBlock";
import { createAdjustedScore } from "../scripts/CalculateScores";
import store from "../store/Store";

const ManualInput: React.FC = observer(() => {
    let [scores,setScores] = useState({Strength: 18, Dexterity: 18, Constitution: 18, Intelligence: 18, Wisdom: 18, Charisma: 18} as AbilityScores)
    let updateScore = (ability: AbilityName, modifier: (n:number)=>number) => {
        let s: AbilityScores = {...scores};
        s[ability] = modifier(s[ability]);
        setScores(s);
    }
    let adjustedScores = createAdjustedScore(store.race, scores);
    return <div className="arrange-to-taste">
        {AbilityNames.map(ability=>
          <div className="StatBox" key={ability}>
              <div>{ability.slice(0,3)}</div>
              <div>{adjustedScores[ability]} </div>
              <div>
                <Button onClick={()=>updateScore(ability, (n)=>n-1)} disabled={scores[ability]<=3}><big><b>-</b></big></Button>
                <Button onClick={()=>updateScore(ability, (n)=>n+1)} disabled={scores[ability]>=18}><big><b>+</b></big></Button>
              </div>
          </div>
        )}
        <ChoosableClasses scores={scores}/>
    </div>
});

export default ManualInput;