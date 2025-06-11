const MULTIPLIERS = {
    base: (skill) => {
        // lógica de multiplicador base para skill, exemplo: skill 10 = 2x, skill 100 = 1x e skill 150 = 0.5x
        return Math.max(0.5, 2 - Math.floor(skill / 50 * 0.5));
    },
    vip: 1.1,
    booster: 1.2,
    double: 2.0,
};

function getTotalMultiplier({ isVip, isBooster, isDoubleSkill }) {
    let total = 1;
    if (isVip) total *= MULTIPLIERS.vip;    
    if (isBooster) total *= MULTIPLIERS.booster;
    if (isDoubleSkill) total *= MULTIPLIERS.doubleSkill;
    
    return total;
}
