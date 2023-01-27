const comentario = "Esse covid outro perigoso!";
const palavrasBloqueadas = "covid pandemia";

function bloquearPalavras(comentario, palavrasBloqueadas) {
  const comentarioFormatado = comentario.toUpperCase();
  const arrayPalavrasBloqueadas = palavrasBloqueadas.split(" ");

  for (let palavra of arrayPalavrasBloqueadas) {
    if (comentarioFormatado.includes(palavra.toUpperCase())) {
      return "Comentário bloqueado por conter palavras proibidas";
    } else {
      return "Comentário autorizado";
    }
  }
}
console.log(bloquearPalavras(comentario, palavrasBloqueadas));
