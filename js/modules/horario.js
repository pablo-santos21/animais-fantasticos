export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const agora = new Date();
  const dia = agora.getDay();
  const hora = agora.getHours();

  const semanaAberto = diasSemana.indexOf(dia) !== -1;
  const horarioAberto = hora >= horarioSemana[0] && hora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
