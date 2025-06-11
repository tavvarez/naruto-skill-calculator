function calcularTempoEstimado(currentSkill, currentPercent, targetSkill, totalMultiplier) {
    let tempoTotalHoras = 0;

    for (let skill = currentSkill; skill < targetSkill; skill++) {
        let baseRate = MULTIPLIERS.base(skill);
        let realRate = baseRate * totalMultiplier;

        let horaPorSkill = 12 / realRate; // 12 horas para cada skill, ajustado pelo multiplicador (exemplo)
        if ( skill === currentSkill) {
            let restante = (100 - currentPercent) / 100;
            tempoTotalHoras += horaPorSkill * restante; // calcula o tempo restante para completar a skill atual
        } else {
            tempoTotalHoras += horaPorSkill; // adiciona o tempo para cada skill completa
        }
    }

    const dias = Math.floor(tempoTotalHoras / 24);
    const horas = Math.floor(tempoTotalHoras % 24);

    return { dias, horas, totalHoras: tempoTotalHoras.toFixed(1) };

}