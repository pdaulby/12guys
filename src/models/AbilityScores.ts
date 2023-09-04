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

export type AbilityNames = 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';