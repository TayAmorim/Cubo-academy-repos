const express = require("express");
const instanceAxios = require("./instaciaAxios.js");
const key = require("./apiKey.js");
const fs = require("fs/promises");

const rotas = express();

rotas.get("/empresas/:dominioEmpresa", async (req, res) => {
  const { dominioEmpresa } = req.params;

  try {
    const response = await instanceAxios.get(
      `/v1?api_key=${key}&domain=${dominioEmpresa}`
    );
    const empresaApi = response.data;
    if (!empresaApi.name) {
      return res.status(404).json({
        message: "O nome do dominio não poder ser null",
      });
    }
    const empresas = await fs.readFile("./src/dados.json");
    const parseEmpresas = JSON.parse(empresas);
    parseEmpresas.empresas.push({ ...empresaApi });
    await fs.writeFile("./src/dados.json", JSON.stringify(parseEmpresas));
    return res.status(201).json("Empresa Cadastrada com sucesso");
  } catch (error) {
    res.status(500).json(error.data);
  }
});

module.exports = rotas;
