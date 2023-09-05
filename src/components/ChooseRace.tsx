import React from "react";
import store from "../store/Store";
import { Races } from "../models/Race";

const ChooseRace: React.FC =() => {
    return (
        <>
        {Races.map(race=><button onClick={()=>store.chooseRace(race)}>{race}</button>)}
        </>
    )
}

export default ChooseRace;