import AbilityScores from "../models/AbilityScores";

export default function compareScores(a: AbilityScores, b: AbilityScores) {
    var av: number[] = Object.values(a);
    var bv: number[] = Object.values(b);
    av.sort((a, b)=>b-a);
    bv.sort((a, b)=>b-a);

    console.log(av)
    console.log(bv)

    for (let i = 0; i < 6; i++) {
        if (av[i] > bv[i])
            return -1;
        if (av[i] < bv[i])
            return 1;
    }
    return 0;
  }