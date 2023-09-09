import { action, computed, makeObservable, observable } from 'mobx';
import { Race } from '../models/Race';
import AbilityScores from '../models/AbilityScores';
import { ClassName } from '../models/Class';
import { getAgeAdjustments } from '../scripts/Age';
import { doScoreAdjustments } from '../scripts/CalculateScores';


class CharacterStore {
     race: Race | undefined;
     className: ClassName | undefined;
     abilityScores: AbilityScores | undefined;
     age: number = 0;

    constructor() {
        makeObservable(this, {
            race: observable,
            chooseRace: action,
            className: observable,
            abilityScores: observable,
            chooseClass: action,
            age: observable,
            increaseAge: action,
            stage: computed
        });
    }
    chooseRace = (race: Race) => this.race = race;
    chooseClass = (className: ClassName, abilityScores: AbilityScores) => 
        { this.className = className; this.abilityScores = abilityScores; };
    increaseAge = (increase: number) => { 
        let adjustments = getAgeAdjustments(this.age, increase, this.race!);
        this.abilityScores = doScoreAdjustments(this.abilityScores!, adjustments, this.race!, this.className!);
        this.age += increase;
     }
    get stage() { return !this.race? 0 
        : !this.className? 1 
        : !this.age? 2
        : 3}
}

const store = new CharacterStore();
export default store;