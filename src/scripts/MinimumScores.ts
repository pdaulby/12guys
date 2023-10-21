import AbilityScores from "../models/AbilityScores";
import { ClassName } from "../models/Class";

const Fighter: AbilityScores = {
    Strength: 9, //15 10
    Dexterity: 0,
    Constitution: 7,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0
}

const Cleric: AbilityScores = {
    Strength: 6,
    Dexterity: 3,
    Constitution: 6,
    Intelligence: 6,
    Wisdom: 9, //15
    Charisma: 6
}

const MagicUser: AbilityScores = {
    Strength: 3,
    Dexterity: 6,
    Constitution: 6,
    Intelligence: 9, //16
    Wisdom: 6,
    Charisma: 6
}

const Thief: AbilityScores = {
    Strength: 6,
    Dexterity: 9, //15
    Constitution: 6,
    Intelligence: 6,
    Wisdom: 0,
    Charisma: 6
}

const Paladin: AbilityScores = {
    Strength: 12,
    Dexterity: 0,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 13,
    Charisma: 17
}

const Ranger: AbilityScores = {
    Strength: 13,
    Dexterity: 0,
    Constitution: 14,
    Intelligence: 13,
    Wisdom: 14,
    Charisma: 0
}

const Druid: AbilityScores = {
    Strength: 6,
    Dexterity: 6,
    Constitution: 12,
    Intelligence: 6,
    Wisdom: 15,
    Charisma: 6
}

const Illusionist: AbilityScores = {
    Strength: 0,
    Dexterity: 16,
    Constitution: 6,
    Intelligence: 15,
    Wisdom: 0,
    Charisma: 0
}

const Assassin: AbilityScores = {
    Strength: 12,
    Dexterity: 11,
    Constitution: 6,
    Intelligence: 12,
    Wisdom: 6,
    Charisma: 3
}

const Bard: AbilityScores = {
    Strength: 15,
    Dexterity: 12,
    Constitution: 15,
    Intelligence: 15,
    Wisdom: 10,
    Charisma: 15
}

const Monk: AbilityScores = {
    Strength: 15,
    Dexterity: 15,
    Constitution: 11,
    Intelligence: 6,
    Wisdom: 15,
    Charisma: 6
}

export const MinumumScores = new Map<ClassName, AbilityScores> ([
    ['Paladin', Paladin],
    ['Illusionist', Illusionist],
    ['Bard', Bard],
    ['Monk', Monk],
    ['Druid', Druid],
    ['Ranger', Ranger],
    ['Assassin', Assassin],
    ['Fighter', Fighter],
    ['Cleric', Cleric],
    ['MagicUser', MagicUser],
    ['Thief', Thief]
])

export function allowedClasses(scores: AbilityScores, allowedClasses: ClassName[] = []): ClassName[] {
    return Array.from(MinumumScores.entries())
        .filter(e=>allowedClasses.includes(e[0]))
        .filter(e=>allowedClass(scores, e[1]))
        .map(e=>e[0])
}

function allowedClass(actualScores: AbilityScores, requiredScores: AbilityScores): boolean {
    return actualScores.Strength >= requiredScores.Strength
    && actualScores.Dexterity >= requiredScores.Dexterity
    && actualScores.Constitution >= requiredScores.Constitution
    && actualScores.Intelligence >= requiredScores.Intelligence
    && actualScores.Wisdom >= requiredScores.Wisdom
    && actualScores.Charisma >= requiredScores.Charisma;
}

export function possibleClasses(scores: number[], allowedClasses: ClassName[] = []): ClassName[] {
    return Array.from(MinumumScores.entries())
        .filter(e=>allowedClasses.includes(e[0]))
        .map(e=>toList(e))
        .filter(e=>possibleClass(scores, e[1]))
        .map(e=>e[0])
}

function toList([c, a]: [ClassName, AbilityScores]): [ClassName, number[]] {
    let n = [a.Charisma, a.Constitution, a.Dexterity, a.Intelligence, a.Strength, a.Wisdom];
    n.sort((a,b)=>b-a);
    return [c,n];
}

function possibleClass(actualScores: number[], requiredScores: number[]): boolean {
    return actualScores[0] >= requiredScores[0] 
    && actualScores[1] >= requiredScores[1] 
    && actualScores[2] >= requiredScores[2] 
    && actualScores[3] >= requiredScores[3] 
    && actualScores[4] >= requiredScores[4] 
    && actualScores[5] >= requiredScores[5]; 
}
