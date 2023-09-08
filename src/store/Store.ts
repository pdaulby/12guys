import { action, computed, makeObservable, observable } from 'mobx';
import { Race } from '../models/Race';
import AbilityScores from '../models/AbilityScores';
import { ClassName } from '../models/Class';


class CharacterStore {
     race: Race | undefined;
     className: ClassName | undefined;
     abilityScores: AbilityScores | undefined;

    constructor() {
        makeObservable(this, {
            race: observable,
            chooseRace: action,
            className: observable,
            chooseClass: observable,
            abilityScores: observable,
            stage: computed
        });
    }
    chooseRace = (race: Race) => this.race = race;
    chooseClass = (className: ClassName, abilityScores: AbilityScores) => 
        { this.className = className; this.abilityScores = abilityScores; };
    get stage() { return !this.race? 0 : !this.className? 1 : 2}
}

const store = new CharacterStore();
export default store;