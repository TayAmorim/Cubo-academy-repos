const nome = "Adson Ventura";

function geradorNickname(nome) {
  let username = "";

  let nomeModificado = nome.replace(" ", "");
  if (nomeModificado.length >= 13) {
    username = nomeModificado.slice(0, 12).toLowerCase();
  } else {
    username = nomeModificado.toLowerCase();
  }
  let nickname = username.padStart(13, "@");
  console.log(nickname);
}

geradorNickname(nome);
