const MULTIPLIERS = {
// regra do rate na minha cabeça:
// Skill	Rate
// 10	    2.0x
// 50	    ~1.2x
// 75	    ~0.75x
// 100	    0.3x
    base: (skill) => {
    const m = -1.7 / 90;
    const b = 2.1889;
    const rate = m * skill + b;
    return Math.max(rate, 0.1); // para evitar valores menores que 0.1x
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
