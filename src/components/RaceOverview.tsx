import React from "react";
import '../css/ChooseRace.css';
import { Race, RaceAbilitiesSmall, RaceClassRestrictions, Races, RacialScoreAdjustment } from "../models/Race";
import { AbilityNames } from "../models/AbilityScores";

const RaceDetails: React.FC = () => (<div className="flex-column">{Races.map(race => <RaceOverview key={race} race={race} />)}</div>);

const RaceOverview: React.FC<{race: Race}> = ({race}) => {
    return (
        <div className="RaceOverview">
            <div className="p1">
                <div>{race}</div>
                <RaceScoreModifier race={race}/>
            </div>
            <div className="Description">
                <RaceAbilities race={race}/>
            </div>
        </div>
    )
}

const RaceScoreModifier: React.FC<{race: Race}> = ({race}) => {
    let adjustment = RacialScoreAdjustment.get(race)!;
    let adjustedAbility = AbilityNames.filter(ability=>adjustment[ability] !== 0);
    return (
        <div className="ScoreModifier">
            {adjustedAbility.map(ability=><div key={race+ability}>{ability}: {adjustment[ability]>=0?'+':''}{adjustment[ability]}</div>)}
        </div>
    )
}

const RaceAbilities: React.FC<{race: Race}> = 
    ({race}) => <div className="RaceAbilities"> {RaceAbilitiesSmall.get(race)!.map(ability=><div key={race+ability}>{ability}</div>)} </div>;

const RaceClasses: React.FC<{race: Race}> = 
    ({race}) => <div className="RaceClasses"><b> {RaceClassRestrictions.get(race)!.join(', ')} </b></div>;

export default RaceDetails;