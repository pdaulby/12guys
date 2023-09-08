import React from "react";
import './ChooseRace.css';
import store from "../store/Store";
import { Race, RaceAbilitiesSmall, RaceClassRestrictions, Races, RacialScoreAdjustment } from "../models/Race";
import AbilityScores, { AbilityNames } from "../models/AbilityScores";

const ChooseRace: React.FC = () => (<>{Races.map(race => <RaceOverview race={race} />)} </>);

const RaceOverview: React.FC<{race: Race}> = ({race}) => {
    let g = 'blah<p>eep</p>'
    return (
        <div className="RaceOverview">
            <div className="p1">
                <div>{race}</div>
                <RaceScoreModifier race={race}/>
                <button onClick={()=>store.chooseRace(race)}>Choose {race}</button>
            </div>
            <div className="Description">
                <RaceAbilities race={race}/>
                <RaceClasses race={race}/>
            </div>
        </div>
    )
}

const RaceScoreModifier: React.FC<{race: Race}> = ({race}) => {
    let adjustment = RacialScoreAdjustment.get(race)!;
    let adjustedAbility = AbilityNames.filter(ability=>adjustment[ability] != 0);
    return (
        <div className="ScoreModifier">
            {adjustedAbility.map(ability=><div>{ability}: {adjustment[ability]>=0?'+':''}{adjustment[ability]}</div>)}
        </div>
    )
}


const RaceAbilities: React.FC<{race: Race}> = 
    ({race}) => <div className="RaceAbilities"> {RaceAbilitiesSmall.get(race)!.map(ability=><div>{ability}</div>)} </div>;

const RaceClasses: React.FC<{race: Race}> = 
    ({race}) => <div className="RaceClasses"><b> {RaceClassRestrictions.get(race)!.join(', ')} </b></div>;

export default ChooseRace;