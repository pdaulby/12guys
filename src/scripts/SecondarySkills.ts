export const rollProfessions = () => {
    let rand = Math.floor(Math.random()*100);
    if (rand >= 85)
        return rollTwice()
    if (rand >= 67)
        return [];
    return [professions.find(([i,])=>i>rand)![1]];
}

const rollTwice = (): string[] => {
    let r1 = Math.floor(Math.random()*100);
    let r2 = Math.floor(Math.random()*100);

    let p1 = professions.find(([i,])=>i>r1)?.[1];
    let p2 = professions.find(([i,])=>i>r2)?.[1];
    let pa = p1 === p2 ? [p1] : [p1, p2];
    return pa.filter(p=>p) as string[];
}

const professions: [number, string][] = [
    [2, 'Armorer'],
    [4, 'Fletcher'],
    [6, 'Gardener'],
    [10, 'Farmer'],
    [14, 'Fisher'],
    [20, 'Forester'],
    [23, 'Gambler'],
    [27, 'Hunter'],
    [32, 'Animal Husbandry'],
    [34, 'Jeweler'],
    [37, 'Tanner'],
    [39, 'Painter'],
    [42, 'Carpenter'],
    [44, 'Miner'],
    [46, 'Ships Navigator'],
    [49, 'Sailor'],
    [51, 'Ship Builder'],
    [54, 'Tailor'],
    [57, 'Wagon Driver'],
    [60, 'Trader'],
    [62, 'Trapper'],
    [64, 'Furrier'],
    [67, 'Woodworker']
]