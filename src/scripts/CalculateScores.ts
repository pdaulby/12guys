import AbilityScores, { AbilityName, AbilityNames } from "../models/AbilityScores";
import { Race, RacialScoreAdjustment, RacialScoreMax, RacialScoreMin } from "../models/Race";

export const createAdjustedScore = (race: Race) => {
    let scores = createScores();
    let adjustment = RacialScoreAdjustment.get(race)!;
    let max = RacialScoreMax.get(race)!;
    let min = RacialScoreMin.get(race)!;
    AbilityNames.forEach(attribute => {
        let adjusted = scores[attribute] + adjustment[attribute];
        if (adjusted > max[attribute]) 
            scores[attribute] = max[attribute];
        else if (adjusted < min[attribute]) 
            scores[attribute] = min[attribute];
        else 
            scores[attribute] = adjusted;
    }); 

    return scores;
}

export function createScores(): AbilityScores {
    return {
      Strength: sum3D6(),
      Dexterity: sum3D6(),
      Constitution: sum3D6(),
      Intelligence: sum3D6(),
      Wisdom: sum3D6(),
      Charisma: sum3D6()
    };
  }

  const sum3D6 = () => sumXDY(3, 6);
  function sumXDY(x: number, y: number): number {
    return rollXDY(x, y).reduce(sum, 0);
  }
  function rollD4Minus1(): number {
    return rollXDY(4, 6).sort((a, b)=>b-a).slice(0, 3).reduce(sum, 0);
  }
  const rollXDY = (x: number, y: number) => Array.from(Array(x)).map(_=>rollDY(y));
  const rollDY = (y: number) => Math.floor(Math.random() * y) + 1;

  const sum = (a: number,b: number)=>a+b;