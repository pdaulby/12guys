import AbilityScores from "./AbilityScores";
import { ClassName } from "./Class";

export type Race = 'Dwarf' | 'Elf' | 'Gnome' | 'HalfElf' | 'Halfling' | 'HalfOrc' | 'Human';
export const Races: Race[] = ['Human', 'Dwarf', 'Elf', 'Gnome', 'HalfElf', 'Halfling', 'HalfOrc']

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
const orcChange : AbilityScores = {...noChange, Strength: 1, Constitution: 1, Charisma: -2}
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

const halfOrcMin: AbilityScores = { ...humanMin,
    Strength: 6,
    Constitution: 13
}
const halfOrcMax: AbilityScores = {
    Strength: 18,
    Intelligence: 17,
    Wisdom: 14,
    Dexterity: 17,
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
    ['HalfOrc', orcChange],
])

export const RacialScoreMin = new Map<Race, AbilityScores>([
    ['Human', humanMin],
    ['Dwarf', dwarfMin],
    ['Elf', elfMin],
    ['Gnome', gnomeMin],
    ['HalfElf', halfElfMin],
    ['Halfling', halflingMin],
    ['HalfOrc', halfOrcMin],
])

export const RacialScoreMax = new Map<Race, AbilityScores>([
    ['Human', humanMax],
    ['Dwarf', dwarfMax],
    ['Elf', elfMax],
    ['Gnome', gnomeMax],
    ['HalfElf', halfElfMax],
    ['Halfling', halflingMax],
    ['HalfOrc', halfOrcMax],
])

export const RaceClassRestrictions = new Map<Race, ClassName[]>([
    ['Human', ['Cleric', 'Druid', 'Fighter', 'Paladin', 'Ranger', 'MagicUser', 'Illusionist', 'Thief', 'Assassin', 'Monk']],
    ['Dwarf', ['Fighter', 'Thief', 'Assassin']],
    ['Elf', ['Fighter', 'MagicUser', 'Thief', 'Assassin']],
    ['Gnome', ['Fighter', 'MagicUser', 'Illusionist', 'Thief', 'Assassin']],
    ['HalfElf', ['Cleric', 'Druid', 'Fighter', 'Ranger', 'MagicUser', 'Thief', 'Assassin']],
    ['Halfling', ['Fighter', 'Thief']],
    ['HalfOrc', ['Cleric', 'Fighter', 'Thief', 'Assassin']],
])

export const RaceAbilitiesSmall = new Map<Race, String[]>([
    ['Human', ['No class maximum levels']],
    ['Dwarf', ['Bonus to magic and poison saves', 'Infravision', 'Mining knowledge', '+1 to hit orcs and goblins', 'large creatures get -4 to hit']],
    ['Elf', ['90% to resist sleep and charm spells', '+1 to hit with bows, short and long swords', 'Infravision, Find secret doors', 'Move silently']],
    ['Gnome', ['Bonus to magic saves, Infravision', 'Greater Mining knowledge', '+1 to hit kobolds and goblins', 'large creatures get -4 to hit']],
    ['HalfElf', ['30% to resist sleep and charm spells', 'infravision', 'Find secret doors']],
    ['Halfling', ['Bonus to magic and poison saves', 'Infravision', 'Move silently']],
    ['HalfOrc', ['Infravision', 'Minimum constitution 13']],
])


//dwarf
// max level 9
// bonus to magic and poison saving throws
// dwarven gnome goblin kobold orcish common + learn 2 others
// infravision: see 60 foot in the dark noting changes in heat radiation
// mining knowledge: detect structural details within 10 foot if searching for them
//   new passages, slopes, pit/falling traps, shifting walls/rooms
// +1 to hit orcs, half orcs, goblins, hobgoblins
// stout: large creatures get -4 to hit
// max 16 char in regards to non dwarves

//elves
// max levels, fighter 7 thief assassin 10, magicUser 11.
// 9/10 to resist sleep and charm spell, on top of a saving throw
// +1 to hit with bows, short sword, long sword
// languages
// infravision: 
// find secret doors: 1/6 passively, 2/6 actively looking, 3/6 to find secret passage
// move silently: if not in metal armor and if all have move silently, 4/6 to suprise, 2/6 if opening a portal

//gnome
// max levels
// bonus to magic saves
// languages
// infravision: 
// mining knowledge +:
// +1 to hit kobolds, goblins
// stout:

//half-elves
// max levels
// 3/10 to resist sleep and charm spells
// languages
// infravision:
// find secret doors:

//halfling
// max levels
// bonus to magic and poison saves
// languages
// infravision:
// move silently:

//half orc
// max levels
// languages
// infravision