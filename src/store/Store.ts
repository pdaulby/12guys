import { action, computed, configure, makeAutoObservable, observable } from 'mobx';
import { Race } from '../models/Race';
import AbilityScores from '../models/AbilityScores';
import { ClassName } from '../models/Class';
import { getAgeAdjustments } from '../scripts/Age';
import { doScoreAdjustments } from '../scripts/CalculateScores';
import { InnissHeightAndWeight } from '../scripts/HeightWeight';
import { rollProfessions } from '../scripts/SecondarySkills';
import StartingMoney from '../scripts/StartingMoney';
import { StartingHealth } from '../scripts/HitDice';
import Allignment from '../models/Allignment';

configure({enforceActions: "always"})
class CharacterStore {
    race?: Race;
    className?: ClassName;
    abilityScores?: AbilityScores;
    allignment?: Allignment;
    age: number = 0;
    money: number = 0;
    height: number = 0;
    weight: number = 0;
    maxHealth: number = 0;
    professions: string[] = []; 

    constructor() {
        makeAutoObservable(this);
    }
    chooseRace = (race: Race) => this.race = race;
    chooseClass = (className: ClassName, abilityScores: AbilityScores) => 
        { this.className = className; this.abilityScores = abilityScores; };
    increaseAge = (increase: number) => { 
        let adjustments = getAgeAdjustments(this.age, increase, this.race!);
        this.abilityScores = doScoreAdjustments(this.abilityScores!, adjustments, this.race!, this.className!);
        this.age += increase;
    }
    updateMoney = (increase: number) => this.money += increase;
    calculateMiscValues = () => {
        let {height, weight} = InnissHeightAndWeight(this.race!, this.abilityScores!);
        this.height = height;
        this.weight = weight;
        this.professions = rollProfessions();
        this.updateMoney(StartingMoney(this.className!));
        this.maxHealth = StartingHealth(this.className!);
    }
    chooseAllignment = (allignment: Allignment) => this.allignment = allignment;

    get stage() { return !this.race? 0 
        : !this.className? 1 
        : !this.age? 2
        : !this.allignment? 3
        : 4; 
    }
}

const store = new CharacterStore();
export default store;