import AbilityScores, { AbilityNames } from "../models/AbilityScores";
import { ClassName } from "../models/Class";
import { Race, RaceClassRestrictions, RacialScoreAdjustment, RacialScoreMax, RacialScoreMin } from "../models/Race";
import { sumXDY, sum, max, min } from "./MathUtil";
import { MinumumScores, allowedClasses } from "./MinimumScores";

export const createViableScore = (race: Race): AbilityScores => {
  let scores = createAdjustedScore(race);
  if (allowedClasses(scores, RaceClassRestrictions.get(race)).length == 0)
    return createViableScore(race);
  return scores;
}

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

export const doScoreAdjustments = (score: AbilityScores, adjustments: AbilityScores[], race: Race, className: ClassName) => {
  let raceMin = RacialScoreMin.get(race)!
  let raceMax = RacialScoreMax.get(race)!
  let classMin = MinumumScores.get(className)!

  return adjustments.reduce((a, s) => {
      let n = sumScores(s, a);
      n = maxOfScores(n, raceMin);
      n = minOfScores(n, raceMax);
      n = maxOfScores(n, classMin);
      return n;
  }, score);
}

const adjustScore = (score: AbilityScores, adjust: AbilityScores, modifier: (s:number, a:number)=>number): AbilityScores => {
  let newScore = {...score};
  AbilityNames.forEach(attribute => {
    newScore[attribute] = modifier(score[attribute], adjust[attribute]);
  });
  return newScore;
}
const sumScores = (score: AbilityScores, adjust: AbilityScores) => adjustScore(score, adjust, sum);
const maxOfScores = (score: AbilityScores, adjust: AbilityScores) => adjustScore(score, adjust, max);
const minOfScores = (score: AbilityScores, adjust: AbilityScores) => adjustScore(score, adjust, min);

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