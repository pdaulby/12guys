import React from "react";
import './StatBlock.css';
import AbilityScores from "../models/AbilityScores";
import { allowedClasses } from "../scripts/MinimumScores";
import { RaceClassRestrictions } from "../models/Race";
import store from "../store/Store";
import { ClassName } from "../models/Class";
import Button from "./Button";

export const ChoosableStatBlock: React.FC<AbilityScores> =
 (scores) => {
    return (<>
        <StatBlock {...scores} />
        <div className="ClassSelectContainer">
            {allowedClasses(scores, RaceClassRestrictions.get(store.race!))
                .map((c,i)=><ClassSelect key={i} className={c} abilityScores={scores} />)}
        </div>
    </>)
}

export const StatBlock: React.FC<AbilityScores> = (scores) => 
    <div className="StatBlock"> {Object.entries(scores).map(([key, value]) => (<StatBox key={key} name={key} stat={value} />))} </div>

const StatBox: React.FC<{name: string, stat: number}> = ({name, stat}) =>
    <div className={'StatBox ' + (stat>=15&&'Rare ')}>{name.substring(0, 3)}: {stat} </div>

const ClassSelect: React.FC<{className: ClassName, abilityScores: AbilityScores}> = ({className, abilityScores}) => {
    let rare = ['Paladin', 'Illusionist', 'Druid', 'Ranger', 'Bard', 'Monk'].includes(className); 
    let starterClass: ClassName = className === 'Bard' ? 'Fighter' : className;
    return (<Button className={(rare?'Rare':'')} onClick={()=>store.chooseClass(starterClass, abilityScores)}>{className}</Button>)
}