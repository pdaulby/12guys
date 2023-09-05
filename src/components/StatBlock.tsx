import React from "react";
import './StatBlock.css';
import AbilityScores from "../models/AbilityScores";
import { allowedClasses } from "../scripts/MinimumScores";
import { RaceClassRestrictions } from "../models/Race";
import store from "../store/Store";

const StatBlock: React.FC<AbilityScores> =
 (scores) => {
    return (
        <>
        <div className="StatBlock">
            {Object.entries(scores).map(([key, value]) => (<StatBox key={key} name={key} stat={value} />))}

        </div>
        <div/>{allowedClasses(scores, RaceClassRestrictions.get(store.race!)).join(', ')}
        </>
    )
}

interface StatProps {
    name: string;
    stat: number;
}
const StatBox: React.FC<StatProps> =
 ({name, stat}) => {
    return (
        <div className={"StatBox " + (stat>=15&&"HighStat ")}>{name.substring(0, 3)}: {stat} </div>
    )
}

export default StatBlock;