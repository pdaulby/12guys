import React from "react";
import './StatBlock.css';
import AbilityScores from "../models/AbilityScores";

const StatBlock: React.FC<AbilityScores> =
 (scores) => {
    return (
        <>
        {Object.entries(scores).map(([key, value]) => (<StatBox key={key} name={key} stat={value} />))}
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
        <div>{name}: {stat} </div>
    )
}

export default StatBlock;