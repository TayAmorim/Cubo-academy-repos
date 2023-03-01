const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const modificadorArray = (frutas) => {
  const colocandoMaiuscula = frutas.map((palavra) => {
    return palavra[0].toUpperCase() + palavra.slice(1).toLowerCase();
  });

  const adicionandoIndex = colocandoMaiuscula.map((array) => {
    return `${colocandoMaiuscula.indexOf(array)} - ${array}`;
  });
  console.log(adicionandoIndex);
};
modificadorArray(frutas);
