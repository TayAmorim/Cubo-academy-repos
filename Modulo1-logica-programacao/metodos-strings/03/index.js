const texto = "Aprenda programar do zero na Cubos Academy";

function UrlAmigavel(texto) {
  let url = ``;
  const arrayDeTexto = texto.split(" ");
  for (let palavra of arrayDeTexto) {
    url += "-" + palavra.toLowerCase();
  }
  return url.replace("-", "");
}

console.log(UrlAmigavel(texto));
