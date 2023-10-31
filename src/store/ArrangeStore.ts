import { action, makeObservable, observable } from "mobx";
import AbilityScores, { AbilityName, SixNumbers } from "../models/AbilityScores"
import { ClassName } from "../models/Class";

class ArrangeStoreClass {
    chosenScores: AbilityScores = { Strength: 0, Dexterity: 0, Intelligence: 0, Constitution: 0, Wisdom: 0, Charisma: 0 };
    choosableValues: number[] = []
    initialValues: number[] = []
    possibleClasses: ClassName[] = []
    constructor() {
        makeObservable(this, {
            chosenScores: observable,
            choosableValues: observable,
            initialValues: observable,
            possibleClasses: observable,
            setChoosableScores: action,
            setScore: action
        });
    }
    setChoosableScores(scores: SixNumbers, possibleClasses: ClassName[]) { 
        this.choosableValues = scores;
        this.initialValues = [...scores]
        this.chosenScores = { Strength: 0, Dexterity: 0, Intelligence: 0, Constitution: 0, Wisdom: 0, Charisma: 0 };
        this.possibleClasses = possibleClasses;
    }
    setScore(score: AbilityName) {
        let previous = this.chosenScores[score];
        this.chosenScores[score] = this.choosableValues.shift()??0;
        if (previous) {
            this.choosableValues.unshift(previous);
        }
    }
}
const ArrangeStore = new ArrangeStoreClass();
export default ArrangeStore;