import AbilityScores from "../models/AbilityScores";
import { ClassName } from "../models/Class";
import { Race } from "../models/Race";
import { sumXDY } from "./MathUtil";

export const getAge = (race: Race, className: ClassName) => {
    let index = ageOrder.indexOf(className) * 3;
    let [min, x, y]: number[] = ageRange.split('\n').slice(1)
        .filter(str=>str.startsWith(race))[0]
        .split(',').slice(1)
        .slice(index, index+3)
        .map(parseFloat);
    return min + sumXDY(x, y);
}

const ageOrder:ClassName[] = ['Cleric','Druid','Fighter','Paladin','Ranger','MagicUser','Illusionist','Thief','Assassin','Monk'];
const ageRange = `Race,Cleric,,,Druid,,,Fighter,,,Paladin,,,Ranger,,,MagicUser,,,Illusionist,,,Thief,,,Assassin,,,Monk
Dwarf,250,2,20,250,2,20,40,5,4,40,5,4,40,5,4,0,0,0,0,0,0,75,3,6,75,3,6,0,0,0
Elf,500,10,10,500,10,10,130,5,6,130,5,6,130,5,6,150,5,6,150,5,6,100,5,6,100,5,6,0,0,0
Gnome,300,3,12,300,3,12,60,5,4,60,5,4,60,5,4,30,2,8,30,2,8,22,3,8,22,3,8,0,0,0
HalfElf,40,2,4,40,2,4,22,3,4,22,3,4,22,3,4,30,2,8,30,2,8,22,3,8,22,3,8,0,0,0
Halfling,0,0,0,0,0,0,20,3,4,20,3,4,20,3,4,0,0,0,0,0,0,40,2,4,40,2,4,0,0,0
HalfOrc,20,1,4,20,1,4,13,1,4,13,1,4,13,1,4,0,0,0,0,0,0,20,2,4,20,2,4,0,0,0
Human,18,1,4,18,1,4,15,1,4,17,1,4,20,1,4,24,2,8,30,1,6,18,1,4,20,1,4,21,1,4`;


export const getAgeCategory = (age: number, race: Race) => {
    return raceAgeCategories(race)
    .find(({maxAge})=>age<=maxAge)
    ?.category || 'Dead';
}

const raceAgeCategories = (race: Race) => {
    return ageCategoriesCsv.split('\n').slice(1)
    .filter(str=>str.startsWith(race))[0]
    .split(',').slice(1)
    .map(parseFloat)
    .map((n, i)=>({maxAge: n, category:ageCategories[i], index: i}));
}

export type AgeCategory = 'Child'|'YoungAdult'|'Mature'|'MiddleAged'|'Old'|'Venerable'|'Dead';
const ageCategories:AgeCategory[] = ['Child','YoungAdult','Mature','MiddleAged','Old','Venerable','Dead']
const ageCategoriesCsv =`Race,Child,YoungAdult,Mature,MiddleAged,Old,Venerable,Dead
Dwarf,7,50,150,250,350,450,9999999
Elf,7,60,175,275,400,525,9999999
Gnome,7,90,300,450,600,750,9999999
HalfElf,7,40,100,175,250,325,9999999
Halfling,7,33,68,101,144,199,9999999
HalfOrc,7,15,30,45,60,80,9999999
Human,7,20,40,60,90,120,9999999`

const zeros :AbilityScores = {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0
}

export const getAgeAdjustments = (currentAge: number, increase: number, race: Race): AbilityScores[] => {
    let categories = raceAgeCategories(race);
    
    let current = categories.find(({maxAge})=>currentAge<=maxAge);
    let next = categories.find(({maxAge})=>currentAge+increase<=maxAge);
    if (!current || !next)
        return [];
    if (current.index === next.index)
        return [];

    return categories.slice(current.index+1, next.index+1)
        .map(({category})=>ageAdjust[category]);
}

const ageAdjust = {
    Child: {...zeros},
    YoungAdult: {...zeros, Wisdom: -1, Constitution: 1},
    Mature: {...zeros, Wisdom: 1, Strength: 1},
    MiddleAged: {...zeros, Strength: -1, Constitution: -1, Intelligence: 1, Wisdom: 1},
    Old: {...zeros, Strength: -2, Dexterity: -2, Constitution: -1, Wisdom: 1},
    Venerable: {...zeros, Strength: -1, Dexterity: -1, Constitution: -1, Intelligence: 1, Wisdom: 1},
    Dead: {...zeros}
}