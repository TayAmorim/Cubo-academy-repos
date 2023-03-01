const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];
const tamanhoDoGrupo = 4;

function divisaoGrupos(nomes, tamanhoDoGrupo) {
  const grupos = [];
  const quatantidadeGrupos = nomes.length / tamanhoDoGrupo;

  for (let i = 0; i < quatantidadeGrupos; i++) {
    const result = nomes.splice(0, tamanhoDoGrupo);
    grupos.push(result);
  }
  console.log(grupos);
}

divisaoGrupos(nomes, tamanhoDoGrupo);
