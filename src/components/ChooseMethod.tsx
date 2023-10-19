import React from "react";
import store from "../store/Store";
import Button from "./Button";

const ChooseMethod: React.FC = () => 
    <div className="RaceSelect">
        <Method method={3}>method 3</Method>
        <Method method={4}>method 4</Method>
    </div>

const Method: React.FC<{method: 1|2|3|4|5, children?: React.ReactNode}> = ({method, children}) =>
    <div>
        {children}
        <Button onClick={()=>store.chooseMethod(method)}>{"Method "+method}</Button>
    </div>

export default ChooseMethod;