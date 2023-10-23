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
        Charisma: number
        ) {
            this.Strength = Strength;
            this.Dexterity = Dexterity;
            this.Constitution = Constitution;
            this.Intelligence = Intelligence;
            this.Wisdom = Wisdom;
            this.Charisma = Charisma;
    }
}

export type AbilityName = 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';
export const AbilityNames: AbilityName[] = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
export type SixNumbers = [number,number,number,number,number,number]