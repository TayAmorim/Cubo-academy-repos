const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function filaAtendimento(pacientes, operacao, nome) {
  const listaPacientes = [];
  for (let i = 0; i < listaPacientes; i++) {
    if (operacao === "agendar" && nome === pacientes[i]) {
      listaPacientes.push(pacientes[i]);
    } else if (operacao === "atender" && nome === pacientes[i]) {
      listaPacientes.unshift(pacientes[i]);
    }
  }
  console.log(listaPacientes);
}

filaAtendimento(pacientes, "agendar", "Maria");
filaAtendimento(pacientes, "agendar", "Ana");
filaAtendimento(pacientes, "atender", "José");
