import { ClassName } from "../models/Class";
import { sumXDY } from "./MathUtil";

export const hitDice = {
    Cleric: 8,
    Druid: 8,
    Fighter: 10,
    Paladin: 10,
    Bard: 10,
    Ranger: 8,
    MagicUser: 4,
    Illusionist: 4,
    Thief: 6,
    Assassin: 6,
    Monk: 4
}

const levelOneBonusHitDice = (className: ClassName) => className === 'Monk' || className === 'Ranger';

export const StartingHealth = (className: ClassName) => {
    let y = hitDice[className];
    let x = levelOneBonusHitDice(className) ? 2 : 1;
    return sumXDY(x, y);
}