import AbilityScores, { SixNumbers } from "../models/AbilityScores";

export default function compareScores(a: AbilityScores, b: AbilityScores) {
    var av = toSortedNumbers(a);
    var bv = toSortedNumbers(b);
    
    for (let i = 0; i < 6; i++) {
        if (av[i] > bv[i])
            return -1;
        if (av[i] < bv[i])
            return 1;
    }
    return 0;
  }

export function toSortedNumbers(a: AbilityScores): SixNumbers {
    let n = [a.Charisma, a.Constitution, a.Dexterity, a.Intelligence, a.Strength, a.Wisdom] as SixNumbers;
    n.sort((a,b)=>b-a);
    return n;
}