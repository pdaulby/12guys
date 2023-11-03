import React from "react";
import AbilityScores, { SixNumbers } from "../models/AbilityScores"
import { ChoosableStatBlock } from './StatBlock';
import compareScores from '../scripts/SortScores';
import Store from "../store/Store";
import { observer } from "mobx-react";
import { createScores } from "../scripts/CalculateScores";
import { sumXDY, xD6Top3 } from "../scripts/MathUtil";
import ArrangeToTaste from "./ArrangeToTaste";
import ArrangeStore from "../store/ArrangeStore"
import { RaceClassRestrictions } from "../models/Race";
import { possibleClasses } from "../scripts/MinimumScores";
import ManualInput from "./ManualInput";

export const RollScores: React.FC = observer(() => {
    switch (Store.method) {
      case -1:
        throw Error("should never happen")
      case 0:
        let score0 = createScores()
        return <ChoosableStatBlock {...score0} />
      case 1:
        let rolls1 = Array.from(Array(6)).map(()=>xD6Top3(4)).sort((a, b)=>b-a) as SixNumbers;
        if (ArrangeStore.initialValues.length === 0) { // there is an infinite loop without this if, i'm not sure why
            let raceClasses = RaceClassRestrictions.get(Store.race!)!;
            let classes1 = possibleClasses(rolls1, raceClasses); //TODO do this in store
            ArrangeStore.setChoosableScores(rolls1, classes1);
        }
        return <ArrangeToTaste />
      case 2:
        let fn = ()=>Math.max(...Array.from(Array(6)).map(()=>sumXDY(3,6)));
        let rolls2 =  Array.from(Array(6)).map(fn).sort((a, b)=>b-a) as SixNumbers;
        if (ArrangeStore.initialValues.length === 0) {    
            let raceClasses = RaceClassRestrictions.get(Store.race!)!;
            let classes2 = possibleClasses(rolls2, raceClasses)
            ArrangeStore.setChoosableScores(rolls2, classes2);
        }
        return <ArrangeToTaste />
      case 3:
        let score3 = createScores(()=> Math.max(...Array.from(Array(12)).map(()=>sumXDY(3,6))));
        return <ChoosableStatBlock {...score3} />
      case 4:
        let scores: AbilityScores[] = Array.from(Array(12)).map(()=>createScores());
        scores.sort(compareScores);
        return <TwelveGuys scores={scores}></TwelveGuys>
      case 5:
        return <ManualInput />
    }
  })
  
const TwelveGuys: React.FC<{scores: AbilityScores[]}> =
 ({scores}) => <div>{scores.map((s, i) => (<ChoosableStatBlock key={'stats'+i} {...s} />))}</div>

export default RollScores;