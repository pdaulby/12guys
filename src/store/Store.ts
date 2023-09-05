import { action, computed, makeObservable, observable } from 'mobx';
import { Race } from '../models/Race';
import AbilityScores from '../models/AbilityScores';


class CharacterStore {
     race: Race | undefined;
     twelveGuys: AbilityScores[] = [];

    constructor() {
        makeObservable(this, {
            race: observable,
            chooseRace: action,
            twelveGuys: observable,
            generateTwelveGuys: action,
        });
    }
    chooseRace = (race: Race) => this.race = race;
    generateTwelveGuys = (abilityScores: AbilityScores[]) => this.twelveGuys = abilityScores;
}

const store = new CharacterStore();
export default store;