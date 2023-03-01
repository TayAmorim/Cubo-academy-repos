const nomeArquivo = "Foto da Familia.hvg";
const arquivosAceitos = ["jpg", "jpeg", "gif", "png"];

function validacaoArquivos(nomeArquivo, arquivosAceitos) {
  let mensagem = "";
  let validar = [];
  for (let arquivos of arquivosAceitos) {
    if (nomeArquivo.includes(arquivos)) {
      validar.push(arquivos);
    }
    if (validar.length === 1) {
      mensagem = "Arquivo Válido";
    } else {
      mensagem = "Arquivo Invalido";
    }
  }
  return mensagem;
}
console.log(validacaoArquivos(nomeArquivo, arquivosAceitos));
