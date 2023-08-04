const axios = require("axios");

const instanceAxios = axios.create({
  baseURL: "https://companyenrichment.abstractapi.com",
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
});

module.exports = instanceAxios;
