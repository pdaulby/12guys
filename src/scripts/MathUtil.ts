export const randBetween = (a: number, b: number) => {
    let [lower, higher] = (b-a>0) ? [a,b] : [b,a];
    return Math.floor(Math.random() * (higher-lower+1)) + lower;
}

export const applyPercent = (val: number, percent: number) => val + (val * percent / 100);

export const heightFromInches = (inches: number) => ({
        feet: Math.floor(inches / 12),
        inches: inches % 12
    });
