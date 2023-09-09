export const randBetween = (a: number, b: number) => {
    let [lower, higher] = (b-a>0) ? [a,b] : [b,a];
    return Math.floor(Math.random() * (higher-lower+1)) + lower;
}

export const applyPercent = (val: number, percent: number) => val + (val * percent / 100);

export const heightFromInches = (inches: number) => ({
        feet: Math.floor(inches / 12),
        inches: inches % 12
    });


export function sumXDY(x: number, y: number): number {
  return rollXDY(x, y).reduce(sum, 0);
}
function rollD4Minus1(): number {
  return rollXDY(4, 6).sort((a, b)=>b-a).slice(0, 3).reduce(sum, 0);
}
const rollXDY = (x: number, y: number) => Array.from(Array(x)).map(_=>rollDY(y));
const rollDY = (y: number) => Math.floor(Math.random() * y) + 1;
  
export const sum = (a: number,b: number)=>a+b;
export const min = (s: number, a: number) : number => a-s>0?s:a;
export const max = (s: number, a: number) : number => a-s<0?s:a;  