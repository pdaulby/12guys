import React from "react";
import AbilityScores from "../models/AbilityScores"
import { ChoosableStatBlock } from './StatBlock';
import compareScores from '../scripts/SortScores';
import Store from "../store/Store";
import { observer } from "mobx-react";
import { createViableScore } from "../scripts/CalculateScores";
import { sumXDY, xD6Top3 } from "../scripts/MathUtil";

export const RollScores: React.FC = observer(() => {
    switch (Store.method) {
      case -1:
      case 0:
        let score0 = createViableScore(Store.race!)
        return <ChoosableStatBlock {...score0} />
      case 1:
      case 2:
        throw Error("should never happen")
      case 3:
        let score3 = createViableScore(Store.race!, ()=> Math.max(...Array.from(Array(12)).map(()=>sumXDY(3,6))))
        return <ChoosableStatBlock {...score3} />
      case 4:
        let scores: AbilityScores[] = Array.from(Array(12)).map(()=>createViableScore(Store.race!));
        scores.sort(compareScores);
        return (<TwelveGuys scores={scores}></TwelveGuys>);
      case 5:
        return <>TODO manual input</>
    }
  })
  
const TwelveGuys: React.FC<{scores: AbilityScores[]}> =
 ({scores}) => <>{scores.map((s, i) => (<ChoosableStatBlock key={'stats'+i} {...s} />))}</>

export default RollScores;
