import { ClassName } from "../models/Class";
import { Race } from "../models/Race";
import { sumXDY } from "./CalculateScores";

export const getAge = (race: Race, className: ClassName) => {
    let index = ageOrder.indexOf(className) * 3;
    let [min, x, y]: number[] = ageRange.split('\n').slice(1)
        .filter(str=>str.startsWith(race))[0]
        .split(',').slice(1)
        .slice(index, index+3)
        .map(parseFloat);
    return min + sumXDY(x, y);
}

const ageOrder = ['Cleric','Druid','Fighter','Paladin','Ranger','MagicUser','Illusionist','Thief','Assassin','Monk'];
const ageRange = `Race,Cleric,,,Druid,,,Fighter,,,Paladin,,,Ranger,,,MagicUser,,,Illusionist,,,Thief,,,Assassin,,,Monk
Dwarf,250,2,20,250,2,20,40,5,4,40,5,4,40,5,4,0,0,0,0,0,0,75,3,6,75,3,6,0,0,0
Elf,500,10,10,500,10,10,130,5,6,130,5,6,130,5,6,150,5,6,150,5,6,100,5,6,100,5,6,0,0,0
Gnome,300,3,12,300,3,12,60,5,4,60,5,4,60,5,4,30,2,8,30,2,8,22,3,8,22,3,8,0,0,0
HalfElf,40,2,4,40,2,4,22,3,4,22,3,4,22,3,4,30,2,8,30,2,8,22,3,8,22,3,8,0,0,0
Halfling,0,0,0,0,0,0,20,3,4,20,3,4,20,3,4,0,0,0,0,0,0,40,2,4,40,2,4,0,0,0
HalfOrc,20,1,4,20,1,4,13,1,4,13,1,4,13,1,4,0,0,0,0,0,0,20,2,4,20,2,4,0,0,0
Human,18,1,4,18,1,4,15,1,4,17,1,4,20,1,4,24,2,8,30,1,6,18,1,4,20,1,4,21,1,4`;