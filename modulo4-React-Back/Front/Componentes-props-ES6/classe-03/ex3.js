const tripData = {
  names: "Daniel Lopes",
  origin: "Pres. Prudente",
  destination: "São Paulo",
  date: "29/02/2022",
  hour: "17:45",
};

const { names, origin, destination, date, hour } = tripData;

function sayTripPath(names, origin, destination, date, hour) {
  console.log(`
    Olá ${names}, o seu voo que sai de ${origin} com destino a ${destination}
    está agendado para ${date} às ${hour}!
  `);
}

sayTripPath(names, origin, destination, date, hour);
