import { ClassName } from "../models/Class";
import { sumXDY } from "./CalculateScores";

const StartingMoney = (className: ClassName) => {
    let [x,y] = moneyCalculation[className];
    let sum = sumXDY(x, y);
    if (className === "Monk") 
        return sum;
    return sum * 10;
};

const moneyCalculation = {
    'Cleric': [3,6],
    'Druid': [3,6],
    'Fighter': [5,4],
    'Paladin': [5,4],
    'Ranger': [5,4],
    'Bard': [5,4],
    'MagicUser': [2,4],
    'Illusionist': [2,4],
    'Thief': [2,6],
    'Assassin': [2,6],
    'Monk': [5,4]
};

export default StartingMoney;