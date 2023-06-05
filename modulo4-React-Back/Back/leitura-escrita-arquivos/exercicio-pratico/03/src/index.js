const express = require("express");
const fs = require("fs/promises");
const { buscarEndereco } = require("utils-playground");

const app = express();
app.use(express.json());
let id = 0;

app.get("/enderecos/:cep", async (req, res) => {
  try {
    const { cep } = req.params;
    try {
      const enderecoBancoDeDados = await fs.readFile("./src/enderecos.json");
      const parseenderecoBancoDeDados = JSON.parse(enderecoBancoDeDados);
      const cepPesquisado = await buscarEndereco(cep);
      const possuiCep = parseenderecoBancoDeDados.find(
        (endereco) => endereco.logradouro === cepPesquisado.logradouro
      );
      if (possuiCep) {
        res.send(possuiCep);
      }
      if (parseenderecoBancoDeDados.length === 0 || !possuiCep) {
        parseenderecoBancoDeDados.push(cepPesquisado);
        await fs.writeFile(
          "./src/enderecos.json",
          JSON.stringify(parseenderecoBancoDeDados)
        );
        res.status(201).json("Endereço cadastrado");
      }
    } catch (error) {
      req.send(error);
    }
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000);
