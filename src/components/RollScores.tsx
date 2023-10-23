import React from "react";
import AbilityScores, { AbilityName, SixNumbers } from "../models/AbilityScores"
import { ChoosableStatBlock } from './StatBlock';
import compareScores from '../scripts/SortScores';
import Store from "../store/Store";
import { observer } from "mobx-react";
import { createViableScore } from "../scripts/CalculateScores";
import { sumXDY, xD6Top3 } from "../scripts/MathUtil";
import store from "../store/Store";
import { RaceClassRestrictions, RacialScoreMax, RacialScoreMin } from "../models/Race";
import { possibleClasses } from "../scripts/MinimumScores";
import { makeAutoObservable } from "mobx";

export const RollScores: React.FC = observer(() => {
    switch (Store.method) {
      case -1:
        throw Error("should never happen")
      case 0:
        let score0 = createViableScore(Store.race!)
        return <ChoosableStatBlock {...score0} />
      case 1:
        let rolls1 = Array.from(Array(6)).map(()=>xD6Top3(4)).sort((a, b)=>b-a) as SixNumbers;
        return <ArrangeToTaste scores={rolls1} />
      case 2:
        let fn = ()=>Math.max(...Array.from(Array(6)).map(()=>sumXDY(3,6)));
        let rolls2 =  Array.from(Array(6)).map(fn).sort((a, b)=>b-a) as SixNumbers;
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


const ArrangeToTaste: React.FC<{scores: SixNumbers}> = observer(({scores}) => {
    let raceClasses = RaceClassRestrictions.get(store.race!)!;
    let min = RacialScoreMin.get(store.race!)!;
    let max = RacialScoreMax.get(store.race!)!;
    let classes = possibleClasses(scores, raceClasses)
    return <>
    <div>{scores}</div>
    <div>{classes}</div>
 </>
});

class ArrangeStore {
    chosenScores: AbilityScores = { Strength: 0, Dexterity: 0, Intelligence: 0, Constitution: 0, Wisdom: 0, Charisma: 0 };
    choosableValues: number[] = []
    constructor() {
        makeAutoObservable(this);
    }
    setChoosableScores(scores: SixNumbers) { 
        this.choosableValues = scores;
        this.chosenScores = { Strength: 0, Dexterity: 0, Intelligence: 0, Constitution: 0, Wisdom: 0, Charisma: 0 };
    }
    setScore(score: AbilityName) {
        let previous = this.chosenScores[score];
        this.chosenScores[score] = this.choosableValues[0]
        if (previous) 
            this.choosableValues[0] = previous;
        else
            this.choosableValues.slice(1);
    }
}