// eventos e UI

document.getElementById('currentPercent').addEventListener('input', function () {
    document.getElementById('percentValue').innerText = this.value + '%';
});

function calcularSkill() {
    const currentSkill = parseInt(document.getElementById('currentSkill').value);
    const currentPercent = parseInt(document.getElementById('currentPercent').value);
    const targetSkill = parseInt(document.getElementById('targetSkill').value);
    const isVip = document.getElementById('isVip').checked;
    const isBooster = document.getElementById('isBooster').checked;
    const isDoubleSkill = document.getElementById('isDoubleSkill').checked;

    if (isNaN(currentSkill) || isNaN(currentPercent) || isNaN(targetSkill)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    if (targetSkill <= currentSkill) {
        alert('A skill alvo deve ser maior que a skill atual.');
        return;
    }

    const totalMultiplier = getTotalMultiplier({ isVip, isBooster, isDoubleSkill });
    const { dias, horas, totalHoras } = calcularTempoEstimado(
        currentSkill,
        currentPercent,
        targetSkill,
        totalMultiplier
    );

    const resultado = document.getElementById('resultado');
    resultado.classList.remove('d-none');
    resultado.innerHTML = `
    <strong>Resultado:</strong><br>
    Com skill <strong>${currentSkill}</strong> (${currentPercent}%) até <strong>${targetSkill}</strong><br>
    Estimamos: <strong>${dias} dias e ${horas} horas</strong> (${totalHoras} horas no total) de treino.
  `;
  console.log(resultado);
  console.log(totalHoras);
  console.log(dias);
  console.log(horas);

}