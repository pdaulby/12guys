import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import AbilityScores, { AbilityName, SixNumbers } from "../models/AbilityScores"

class ArrangeStoreClass {
    chosenScores: AbilityScores = { Strength: 0, Dexterity: 0, Intelligence: 0, Constitution: 0, Wisdom: 0, Charisma: 0 };
    choosableValues: number[] = []
    constructor() {
        makeObservable(this, {
            chosenScores: observable,
            choosableValues: observable,
            setChoosableScores: action,
            setScore: action
        });
    }
    setChoosableScores(scores: SixNumbers) { 
        this.choosableValues = scores;
        this.chosenScores = { Strength: 0, Dexterity: 0, Intelligence: 0, Constitution: 0, Wisdom: 0, Charisma: 0 };
    }
    setScore(score: AbilityName) {
        let previous = this.chosenScores[score];
        this.chosenScores[score] = this.choosableValues.shift()??0;
        if (previous) {
            console.log("previous")
            this.choosableValues.unshift(previous);
        }
        else {
            console.log("not previous")
        }
    }
}
const ArrangeStore = new ArrangeStoreClass();
export default ArrangeStore;