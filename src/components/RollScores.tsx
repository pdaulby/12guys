import React from "react";
import AbilityScores, { SixNumbers } from "../models/AbilityScores"
import { ChoosableStatBlock } from './StatBlock';
import compareScores from '../scripts/SortScores';
import Store from "../store/Store";
import { observer } from "mobx-react";
import { createViableScore } from "../scripts/CalculateScores";
import { sumXDY, xD6Top3 } from "../scripts/MathUtil";
import ArrangeToTaste from "./ArrangeToTaste";
import ArrangeStore from "../store/ArrangeStore"

export const RollScores: React.FC = observer(() => {
    switch (Store.method) {
      case -1:
        throw Error("should never happen")
      case 0:
        let score0 = createViableScore(Store.race!)
        return <ChoosableStatBlock {...score0} />
      case 1:
        let rolls1 = Array.from(Array(6)).map(()=>xD6Top3(4)).sort((a, b)=>b-a) as SixNumbers;
        if (ArrangeStore.choosableValues.length == 0 && ArrangeStore.chosenScores.Charisma == 0) // there is an infinite loop without this if, i'm not sure why
            ArrangeStore.setChoosableScores(rolls1);
        return <ArrangeToTaste scores={rolls1} />
      case 2:
        let fn = ()=>Math.max(...Array.from(Array(6)).map(()=>sumXDY(3,6)));
        let rolls2 =  Array.from(Array(6)).map(fn).sort((a, b)=>b-a) as SixNumbers;
        if (ArrangeStore.choosableValues.length == 0 && ArrangeStore.chosenScores.Charisma == 0)
            ArrangeStore.setChoosableScores(rolls2);
        return <ArrangeToTaste scores={rolls2} />
      case 3:
        let score3 = createViableScore(Store.race!, ()=> Math.max(...Array.from(Array(12)).map(()=>sumXDY(3,6))));
        return <ChoosableStatBlock {...score3} />
      case 4:
        let scores: AbilityScores[] = Array.from(Array(12)).map(()=>createViableScore(Store.race!));
        scores.sort(compareScores);
        return (<TwelveGuys scores={scores}></TwelveGuys>);
      case 5:
        throw Error("should never happen")
    }
  })
  
const TwelveGuys: React.FC<{scores: AbilityScores[]}> =
 ({scores}) => <>{scores.map((s, i) => (<ChoosableStatBlock key={'stats'+i} {...s} />))}</>

export default RollScores;