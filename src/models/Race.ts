import AbilityScores from "./AbilityScores";
import { ClassName, Classes } from "./Class";

export type Race = 'Dwarf' | 'Elf' | 'Gnome' | 'HalfElf' | 'Halfling' | 'HalfOrk' | 'Human';
export const Races: Race[] = ['Human', 'Dwarf', 'Elf', 'Gnome', 'HalfElf', 'Halfling', 'HalfOrk']

const noChange: AbilityScores = {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0
}
const dwarfChange : AbilityScores = {...noChange, Constitution: 1, Charisma: -1}
const elfChange : AbilityScores = {...noChange, Dexterity: 1, Constitution: -1}
const orkChange : AbilityScores = {...noChange, Strength: 1, Constitution: 1, Charisma: -2}
const halflingChange : AbilityScores = {...noChange, Dexterity: 1, Strength: -1}

const humanMin: AbilityScores = {
    Strength: 3,
    Dexterity: 3,
    Constitution: 3,
    Intelligence: 3,
    Wisdom: 3,
    Charisma: 3
}
const humanMax: AbilityScores = {
    Strength: 18,
    Dexterity: 18,
    Constitution: 18,
    Intelligence: 18,
    Wisdom: 18,
    Charisma: 18
}


const dwarfMin: AbilityScores = { ...humanMin,
    Strength: 8,
    Constitution: 12
}
const dwarfMax: AbilityScores = { ...humanMax,
    Dexterity: 17,
    Constitution: 19,
    Charisma: 16
}

const elfMin: AbilityScores = {
    Strength: 3,
    Intelligence: 8,
    Wisdom: 3,
    Dexterity: 7,
    Constitution: 6,
    Charisma: 8
}
const elfMax: AbilityScores = { ...humanMax,
    Dexterity: 19,
}

const gnomeMin: AbilityScores = {
    Strength: 6,
    Intelligence: 7,
    Wisdom: 3,
    Dexterity: 3,
    Constitution: 8,
    Charisma: 3
}
const gnomeMax: AbilityScores = humanMax;

const halfElfMin: AbilityScores = {
    Strength: 3,
    Intelligence: 4,
    Wisdom: 3,
    Dexterity: 6,
    Constitution: 6,
    Charisma: 3
}
const halfElfMax: AbilityScores = humanMax;

const halflingMin: AbilityScores = {
    Strength: 6,
    Intelligence: 6,
    Wisdom: 3,
    Dexterity: 8,
    Constitution: 10,
    Charisma: 3
}
const halflingMax: AbilityScores = {
    Strength: 17,
    Intelligence: 18,
    Wisdom: 17,
    Dexterity: 18,
    Constitution: 19,
    Charisma: 18
}

const halfOrkMin: AbilityScores = { ...humanMin,
    Strength: 6,
    Constitution: 13
}
const halfOrkMax: AbilityScores = {
    Strength: 18,
    Intelligence: 17,
    Wisdom: 14,
    Dexterity: 14,
    Constitution: 19,
    Charisma: 12
}

export const RacialScoreAdjustment = new Map<Race, AbilityScores>([
    ['Human', noChange],
    ['Dwarf', dwarfChange],
    ['Elf', elfChange],
    ['Gnome', noChange],
    ['HalfElf', elfChange],
    ['Halfling', halflingChange],
    ['HalfOrk', orkChange],
])

export const RacialScoreMin = new Map<Race, AbilityScores>([
    ['Human', humanMin],
    ['Dwarf', dwarfMin],
    ['Elf', elfMin],
    ['Gnome', gnomeMin],
    ['HalfElf', halfElfMin],
    ['Halfling', halflingMin],
    ['HalfOrk', halfOrkMin],
])

export const RacialScoreMax = new Map<Race, AbilityScores>([
    ['Human', humanMax],
    ['Dwarf', dwarfMax],
    ['Elf', elfMax],
    ['Gnome', gnomeMax],
    ['HalfElf', halfElfMax],
    ['Halfling', halflingMax],
    ['HalfOrk', halfOrkMax],
])

export const RaceClassRestrictions = new Map<Race, ClassName[]>([
    ['Human', ['Cleric', 'Druid', 'Fighter', 'Paladin', 'Ranger', 'MagicUser', 'Illusionist', 'Thief', 'Assassin', 'Monk']],
    ['Dwarf', ['Fighter', 'Thief', 'Assassin']],
    ['Elf', ['Fighter', 'MagicUser', 'Thief', 'Assassin']],
    ['Gnome', ['Fighter', 'MagicUser', 'Illusionist', 'Thief', 'Assassin']],
    ['HalfElf', ['Cleric', 'Druid', 'Fighter', 'Ranger', 'MagicUser', 'Thief', 'Assassin']],
    ['Halfling', ['Fighter', 'Thief']],
    ['HalfOrk', ['Cleric', 'Fighter', 'Thief', 'Assassin']],
])

