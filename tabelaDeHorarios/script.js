/*document.addEventListener("DOMContentLoaded", function() {
  const titulo = document.getElementById("titulo");
  const data = document.getElementById("data");
  const colunas = document.querySelectorAll(".coluna");

  function atualizarData() {
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const ano = hoje.getFullYear();
    data.textContent = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;
  }

  function gerarHorarios(data) {
    const horarios = [];
    for (let hora = 0; hora < 24; hora++) {
      for (let minuto = 0; minuto < 60; minuto += 7) {
        const horarioStr = `${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}`;
        horarios.push(horarioStr);
      }
    }
    return horarios;
  }

  function atualizarHorarios(horarios) {
    console.log("Atualizando horários...");
    const horariosPorColuna = [];
    const horariosPorColunaCount = 6;

    for (let i = 0; i < horariosPorColunaCount; i++) {
      horariosPorColuna.push([]);
    }

    horarios.forEach((horario, index) => {
      horariosPorColuna[index % horariosPorColunaCount].push(horario);
    });

    colunas.forEach((coluna, index) => {
      coluna.innerHTML = "";
      horariosPorColuna[index].forEach(horario => {
        const elementoHora = document.createElement("h2");
        elementoHora.textContent = horario;
        coluna.appendChild(elementoHora);
      });
    });
  }

  function atualizarEstilo() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();

    colunas.forEach(coluna => {
      coluna.childNodes.forEach(hora => {
        const [horaStr, minutoStr] = hora.textContent.split(':');
        const horaNum = parseInt(horaStr);
        const minutoNum = parseInt(minutoStr);

        if (horaNum < horaAtual || (horaNum === horaAtual && minutoNum < minutoAtual)) {
          hora.classList.add("verde");
        }
      });
    });
  }

  function verificarNovaData() {
    console.log("Verificando nova data...");
    const agora = new Date();
    const ultimoUpdate = localStorage.getItem('ultimoUpdate');

    if (!ultimoUpdate || new Date(ultimoUpdate).getDate() !== agora.getDate()) {
      localStorage.setItem('ultimoUpdate', agora);
      const novaData = new Date();
      novaData.setDate(novaData.getDate() + 1);
      data.textContent = `${novaData.getDate() < 10 ? '0' + novaData.getDate() : novaData.getDate()}/${novaData.getMonth() + 1 < 10 ? '0' + (novaData.getMonth() + 1) : novaData.getMonth() + 1}/${novaData.getFullYear()}`;
      const horarios = gerarHorarios(novaData);
      atualizarHorarios(horarios);
    }
  }

  setInterval(verificarNovaData, 1000 * 60 * 60); // Verifica a cada hora

  atualizarData();
  atualizarHorarios(gerarHorarios(new Date()));
  atualizarEstilo();
});*/