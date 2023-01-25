const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 };
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23400 };
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 };
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 };
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 };
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 };
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 };

const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

const clientes = [
  { ...patricia },
  { ...carlos },
  { ...renato },
  { ...jose },
  { ...roberto },
];

for (let cliente of clientes) {
  const { nome } = cliente;
  cliente.carrinho = { item: {}, quantidade: 0 };
  if (nome === "José") {
    cliente.carrinho = {
      item: [
        { ...tv, quantidade: 1 },
        { ...caboUsb, quantidade: 2 },
        { ...webcam, quantidade: 1 },
      ],
    };
  }
  if (nome === "Carlos") {
    cliente.carrinho = {
      item: [{ ...notebook, quantidade: 2 }],
    };
  }
  if (nome === "Patricia") {
    cliente.carrinho = {
      item: [
        { ...teclado, quantidade: 1 },
        { ...caboUsb, quantidade: 2 },
        { ...carregador, quantidade: 1 },
        { ...mouse, quantidade: 1 },
        { ...monitor, quantidade: 1 },
      ],
    };
  }
  if (nome === "Renato") {
    cliente.carrinho = {
      item: [{ ...webcam, quantidade: 5 }],
    };
  }
  if (nome === "Roberto") {
    cliente.carrinho = {
      item: [
        { ...webcam, quantidade: 1 },
        { ...caboUsb, quantidade: 2 },
        { ...monitor, quantidade: 1 },
      ],
    };
  }
}

for (let cliente of clientes) {
  console.log(cliente.nome, cliente.carrinho);
}
