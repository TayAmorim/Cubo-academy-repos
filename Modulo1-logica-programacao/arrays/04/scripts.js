const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function filaAtendimento(pacientes, operacao, nome) {
  if (operacao === "agendar") {
    pacientes.splice(0, 1);
    pacientes.splice(pacientes.length, 0, nome);
  }
  if (operacao === "atender") {
    pacientes.splice(0, 1);
  }
  console.log(`${pacientes.join()}`);
}

filaAtendimento(pacientes, "agendar", "José");
filaAtendimento(pacientes, "atender", "Pedro");
filaAtendimento(pacientes, "atender", "Maria");
filaAtendimento(pacientes, "agendar", "João");
filaAtendimento(pacientes, "agendar", "Ana");
filaAtendimento(pacientes, "atender", "Bárbara");
filaAtendimento(pacientes, "agendar", "Joana");
