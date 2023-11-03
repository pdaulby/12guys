import React from "react";
import '../css/StatBlock.css';
import AbilityScores from "../models/AbilityScores";
import { MinumumScores, allowedClass } from "../scripts/MinimumScores";
import { Race, RaceClassRestrictions, RacialScoreAdjustment, RacialScoreMin } from "../models/Race";
import store from "../store/Store";
import { ClassName } from "../models/Class";
import Button from "./Button";
import { adjustScore, createAdjustedScore } from "../scripts/CalculateScores";
import { observer } from "mobx-react";

export const ChoosableStatBlock: React.FC<AbilityScores> = observer(
 (scores) => {
    let adjustedScores = createAdjustedScore(store.race, scores)
    return (<div>
        <StatBlock {...adjustedScores} />
        <ChoosableClasses scores={scores}/>
    </div>)
})

export const ChoosableClasses: React.FC<{scores: AbilityScores}> = ({scores}) => {
    let raceClasses = (Array.from(RacialScoreMin.entries()) as [Race, AbilityScores][])
        .filter(([race, value]) => allowedClass(adjustScore(scores, RacialScoreAdjustment.get(race)!, (s,a)=>a <= 0? s : s+a), value))
        .map(([race, _]) => [
            race, 
            RaceClassRestrictions.get(race)!
                .filter((className)=>viableClass(race, className, scores))
            ] as [Race, ClassName[]]
        )
        .filter(([_, classes]) => classes.length !== 0);
    return (
    <div className="ClassSelectContainer">
        {raceClasses.length === 0 && "No viable classes"}
        {raceClasses.map(([race,classes])=>(
            <div onMouseEnter={()=>store.chooseRace(race)} onMouseLeave={()=>store.chooseRace('Human')}>
                {race}: {classes.map(c=>(
                <ClassSelect classType={c} race={race} scores={scores} />
                ))}
            </div>
        ))}
    </div>);
}

const viableClass = (race: Race, className: ClassName, scores: AbilityScores) => {
    let requiredScore = adjustScore(MinumumScores.get(className)!, RacialScoreAdjustment.get(race)!, (s,a)=>s-a);
    return allowedClass(scores, requiredScore);
}

export const StatBlock: React.FC<AbilityScores> = (scores) => 
    <div className="StatBlock"> {Object.entries(scores).map(([key, value]) => (<StatBox key={key} name={key} stat={value} />))} </div>

const StatBox: React.FC<{name: string, stat: number}> = ({name, stat}) =>
    <div className={'StatBox ' + (stat>=15&&'Rare ')}>{name.substring(0, 3)}:<div>{stat}</div></div>

const ClassSelect: React.FC<{classType: ClassName, race: Race, scores: AbilityScores}> = ({classType, race, scores}) => {
    let rare = ['Paladin', 'Illusionist', 'Druid', 'Ranger', 'Bard', 'Monk'].includes(classType); 
    let starterClass = classType === 'Bard' ? 'Fighter' : classType;
    return (<Button className={(rare?'Rare':'')} onClick={()=>store.chooseClass(starterClass, race, createAdjustedScore(race, scores))}>{classType}</Button>)
}