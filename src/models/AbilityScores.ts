export default class AbilityScores {
    Strength: number;
    Dexterity: number;
    Constitution: number; 
    Intelligence: number; 
    Wisdom: number;
    Charisma: number;
    constructor(
        Strength: number,
        Dexterity: number,
        Constitution: number, 
        Intelligence: number, 
        Wisdom: number,
        Charisma: number,
        ) {
            this.Strength = Strength;
            this.Dexterity = Dexterity;
            this.Constitution = Constitution;
            this.Intelligence = Intelligence;
            this.Wisdom = Wisdom;
            this.Charisma = Charisma;
    }
}




export const ToLog = (as: AbilityScores) => {
    //return "foo";
    return `Str ${as.Strength}, Dex ${as.Dexterity}, Con ${as.Constitution}, Int ${as.Intelligence}, Wis ${as.Wisdom}, Cha ${as.Charisma}`;
}
export type AbilityName = 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';
export const AbilityNames: [AbilityName,AbilityName,AbilityName,AbilityName,AbilityName,AbilityName] = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
export type SixNumbers = [number,number,number,number,number,number]