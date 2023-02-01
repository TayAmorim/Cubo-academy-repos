const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];
const tamanhoDoGrupo = 3;

function divisaoGrupos(nomes, tamanhoDoGrupo) {
  const grupo = [];
  const grupos = nomes.length / tamanhoDoGrupo;
  if (grupos % 2 === 0) {
    for (let i = 0; i < grupos; i++) {
      if (i === 0) {
        grupo.push(nomes.slice(0, tamanhoDoGrupo));
      } else {
        console.log(i * tamanhoDoGrupo, grupos * i * tamanhoDoGrupo);
        grupo.push(nomes.slice(i * tamanhoDoGrupo, grupos * i));
      }
    }
    console.log(grupo);
  }
}

divisaoGrupos(nomes, tamanhoDoGrupo);
