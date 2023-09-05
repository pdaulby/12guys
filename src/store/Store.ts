import { action, computed, makeObservable, observable } from 'mobx';
import { Race } from '../models/Race';


class CharacterStore {
    race: Race | undefined;

    constructor() {
        makeObservable(this, {
            race: observable,
            chooseRace: action,
        });
    }
    chooseRace = (race: Race) => this.race = race;
}

const store = new CharacterStore();
export default store;