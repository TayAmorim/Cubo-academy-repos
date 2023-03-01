const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function agendarPaciente(pacientes, nome) {
  pacientes.splice(0, 1);
  pacientes.splice(pacientes.length, 0, nome);
  console.log(pacientes.join());
}

function atenderPaciente(pacientes) {
  pacientes.splice(0, 1);
  console.log(pacientes.join());
}

function cancelarAtendimento(pacientes, nome) {
  pacientes.splice(nome, 1);
  console.log(pacientes.join());
}

agendarPaciente(pacientes, "José");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "Maria");
atenderPaciente(pacientes);
