import { configure, makeAutoObservable } from 'mobx';
import { Race } from '../models/Race';
import AbilityScores from '../models/AbilityScores';
import { ClassName } from '../models/Class';
import { getAgeAdjustments } from '../scripts/Age';
import { doAdjust } from '../scripts/CalculateScores';
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
    method: -1|0|1|2|3|4|5 = -1;
    age: number = 0;
    money: number = 0;
    height: number = 0;
    weight: number = 0;
    maxHealth: number = 0;
    professions: string[] = []; 

    constructor() {
        makeAutoObservable(this);
    }
    chooseMethod = (method: 0|1|2|3|4|5 ) => this.method = method;
    
    chooseRace = (race: Race) => this.race = race;
    chooseClass = (className: ClassName, abilityScores: AbilityScores) => 
        { this.className = className; this.abilityScores = abilityScores; };
    increaseAge = (increase: number) => { 
        let adjustments = getAgeAdjustments(this.age, increase, this.race!);
        adjustments.forEach(adjustment => {
            this.abilityScores = doAdjust(this.abilityScores!, adjustment, this.race!, this.className!)
        });
        this.age += increase;
    }
    updateMoney = (increase: number) => this.money += increase;
    calculateMiscValues = () => {
        //TODO exceptional strength
        let {height, weight} = InnissHeightAndWeight(this.race!, this.abilityScores!);
        this.height = height;
        this.weight = weight;
        this.professions = rollProfessions();
        this.updateMoney(StartingMoney(this.className!));
        this.maxHealth = StartingHealth(this.className!);
    }
    chooseAllignment = (allignment: Allignment) => this.allignment = allignment;

    get stage() { return this.method === -1 ? -1
        : !this.race? 0 
        : !this.className? 1 
        : !this.age? 2
        : !this.allignment? 3
        : 4; 
    }
}

const store = new CharacterStore();
export default store;