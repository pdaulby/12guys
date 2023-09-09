import { Race } from "../models/Race";
import { applyPercent, randBetween } from "./MathUtil";

export const InnissHeightAndWeight = (race: Race, {Strength} :{Strength: number}) => {
    let height = avgHeight[race];
    let heightVariationTable = race === 'Human' ? humanHeightVariation : demiHumanHeightVariation;
    let r  = Math.random() * 1000;
    let [,hv1,hv2] = heightVariationTable.find(([i,,])=>i>r)!;
    let hv = randBetween(hv1, hv2);
    height = applyPercent(height, hv);
    let shv = strengthHeightAdjust.get(Strength) || 0;
    height = applyPercent(height, shv);
    height = Math.floor(height);

    let weight = weightFrom31to110Height[height-31];
    weight = applyPercent(weight, weightModifier[race]);
    let weightVariationTable = race === 'Human' ? humanWeightVariation : demiHumanWeightVariation;
    let r2  = Math.random() * 1000;
    let [,wv1,wv2] = weightVariationTable.find(([i,,])=>i>r2)!;
    let wv = randBetween(wv1, wv2);
    weight = applyPercent(weight, wv);
    let swv = strengthWeightAdjust.get(Strength) || 0;
    weight = applyPercent(weight, swv);
    weight = Math.floor(weight);
    return {
        height: height,
        weight: weight
    }
}

const avgHeight = {
    Dwarf: 48,
    Elf: 60,
    Gnome: 42,
    HalfElf: 63,
    Halfling: 42,
    HalfOrc: 64,
    Human: 67
}

const humanHeightVariation: [number, number, number][] = [
    [5, -13, -16],
    [25, -9, -12],
    [150, -5, -8],
    [350, -1, -4],
    [650, 0, 0],
    [850, 1, 4],
    [975, 5, 8],
    [995, 9, 12],
    [1000, 13, 16]
]

const demiHumanHeightVariation: [number, number, number][] = [
    [5, -10, -12],
    [25, -7, -9],
    [150, -4, -6],
    [350, -1, -3],
    [650, 0, 0],
    [850, 1, 3],
    [975, 4, 6],
    [995, 7, 9],
    [1000, 10, 12]
]

const strengthHeightAdjust = new Map<number, number>([
    [3, -9],
    [4, -6],
    [5, -3],
    [16, 3],
    [17, 6],
    [18, 9]
]);

const weightFrom31to110Height = [
625,
608,
592,
575,
559,
544,
528,
513,
498,
484,
470,
456,
442,
429,
415,
403,
390,
378,
366,
354,
342,
331,
320,
309,
299,
288,
278,
268,
259,
250,
240,
232,
223,
214,
206,
198,
190,
183,
175,
168,
161,
154,
148,
141,
135,
129,
123,
117,
112,
107,
101,
96,
92,
87,
82,
78,
74,
70,
66,
62,
59,
55,
52,
49,
46,
43,
40,
37,
35,
32,
30,
28,
26,
24,
22,
20,
18,
17,
15,
14
].reverse();

const weightModifier = {
    Dwarf: 90,
    Elf: -6,
    Gnome: 90,
    HalfElf: -3,
    Halfling: 50,
    HalfOrc: 10,
    Human: 0
}

const humanWeightVariation: [number, number, number][] = [
    [5, -25, -32],
    [25, -17, -24],
    [150, -9, -16],
    [350, -1, -8],
    [650, 0, 0],
    [850, 1, 8],
    [975, 9, 16],
    [995, 17, 24],
    [1000, 25, 32]
]

const demiHumanWeightVariation: [number, number, number][] = [
    [5, -19, -24],
    [25, -13, -18],
    [150, -7, -12],
    [350, -1, -6],
    [650, 0, 0],
    [850, 1, 6],
    [975, 7, 12],
    [995, 13, 18],
    [1000, 19, 24]
]

const strengthWeightAdjust = new Map<number, number>([
    [3, -20],
    [4, -16],
    [5, -12],
    [6, -8],
    [7, -4],
    [14, 4],
    [15, 8],
    [16, 12],
    [17, 16],
    [18, 20]
]);