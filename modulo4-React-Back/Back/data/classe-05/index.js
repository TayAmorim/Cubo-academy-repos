const { getHours, getDay } = require("date-fns");

function taAberto(date) {
  const openHours = getHours(date) > 8 && getHours(date) < 18;
  const openDay = getDay(date) > 0 && getDay(date) < 6;
  const operationSaturday = getHours(date) > 8 && getHours(date) < 12;
  if (getDay(date) === 6 && operationSaturday) {
    return true;
  }
  if (openHours && openDay) {
    return true;
  }
  return false;
}

console.log(taAberto(new Date(2021, 3, 24, 9, 30)));
