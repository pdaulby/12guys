import React from "react";
import store from "../store/Store";
import Button from "./Button";

const ChooseMethod: React.FC = () => 
    <div className="RaceSelect">
        <Method method={0}>The weakest (3d6 in order)</Method>
        <Method method={1}>Best chance at rare classes (4d6 drop highest, arrange to taste)</Method>
        <Method method={2}>Best chance at Ranger (3d6, 12 times, keep highest 6, arrange to taste)</Method>
        <Method method={3}>The most powerful (6 lots of 3d6 keep highest, in order)</Method>
        <Method method={4}>The most varied (roll 12 characters in method 0, keep the best)</Method>
        <Method method={5}>Manual Input</Method>
    </div>

const Method: React.FC<{method: 0|1|2|3|4|5, children?: React.ReactNode}> = ({method, children}) =>
    <div>
        {children}
        <Button disabled={[5].includes(method)} onClick={()=>store.chooseMethod(method)}>{"Method "+method}</Button>
    </div>

export default ChooseMethod;