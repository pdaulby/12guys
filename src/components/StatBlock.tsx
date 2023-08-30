import React from "react";
import './StatBlock.css';
import AbilityScores from "../models/AbilityScores";
import { allowedClasses } from "../scripts/MinimumScores";

const StatBlock: React.FC<AbilityScores> =
 (scores) => {
    return (
        <>
        <div className="StatBlock">
            {Object.entries(scores).map(([key, value]) => (<StatBox key={key} name={key} stat={value} />))}

        </div>
        <div/>{allowedClasses(scores).join(', ')}
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
        <div className="StatBox">{name.substring(0, 3)}: {stat} </div>
    )
}

export default StatBlock;