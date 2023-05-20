const express = require("express");

const app = express();

let minute = 0;
let second = 0;
let cron;

function start() {
  cron = setInterval(timer, 1000);
}
function stop() {
  clearInterval(cron);
}
function timer() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
  }
}

app.get("/", (req, res) => {
  res.send(
    `Tempo atual do cronômetro: ${minute
      .toString()
      .padStart(2, "0")} minutos e ${second
      .toString()
      .padStart(2, "0")} segundos`
  );
});

app.get("/iniciar", (req, res) => {
  start();
  res.send("cronometro iniciado");
});

app.get("/pausar", (req, res) => {
  stop();
  res.send("cronometro pausado");
});

app.get("/continuar", (req, res) => {
  start();
  res.send("Cronômetro continuando!");
});

app.get("/zerar", (req, res) => {
  stop();
  minute = 0;
  second = 0;
  res.send("Cronômetro zerado!");
});

app.listen(8000);
