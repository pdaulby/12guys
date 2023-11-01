import AbilityScores, { AbilityNames } from "../models/AbilityScores";
import { ClassName } from "../models/Class";
import { Race, RaceClassRestrictions, RacialScoreAdjustment, RacialScoreMax, RacialScoreMin } from "../models/Race";
import { sumXDY, sum, max, min } from "./MathUtil";
import { MinumumScores, allowedClasses } from "./MinimumScores";

export const createViableScore = (race: Race, roll: ()=>number = sum3D6): AbilityScores => {
  let scores = createScores(roll);
  scores = createAdjustedScore(race, scores);
  if (allowedClasses(scores, RaceClassRestrictions.get(race)).length === 0)
    return createViableScore(race);
  return scores;
}

export const createAdjustedScore = (race: Race, scores: AbilityScores) => {
    let adjustment = RacialScoreAdjustment.get(race)!;
    return doAdjust(scores, adjustment, race)
}

export const doAdjust = (score: AbilityScores, adjustment: AbilityScores, race: Race, className?: ClassName) => {
  let s = sumScores(score, adjustment);
  s = maxOfScores(s, RacialScoreMin.get(race)!);
  s = minOfScores(s, RacialScoreMax.get(race)!);
  if (className) s = maxOfScores(s, MinumumScores.get(className)!);
  return s;
}

const sumScores = (score: AbilityScores, adjust: AbilityScores) => adjustScore(score, adjust, sum);
const maxOfScores = (score: AbilityScores, adjust: AbilityScores) => adjustScore(score, adjust, max);
const minOfScores = (score: AbilityScores, adjust: AbilityScores) => adjustScore(score, adjust, min);

export const adjustScore = (score: AbilityScores, adjust: AbilityScores, modifier: (s:number, a:number)=>number): AbilityScores => {
  let newScore = {...score};
  AbilityNames.forEach(attribute => {
    newScore[attribute] = modifier(score[attribute], adjust[attribute]);
  });
  return newScore;
}

export function createScores(roll: ()=>number = sum3D6): AbilityScores {
    return {
      Strength: roll(),
      Dexterity: roll(),
      Constitution: roll(),
      Intelligence: roll(),
      Wisdom: roll(),
      Charisma: roll()
    };
  }

const sum3D6 = () => sumXDY(3, 6);