const { getHours } = require("date-fns");

function taAberto(date) {
  if (getHours(date) > 8 && getHours(date) < 18) return true;
  return false;
}

console.log(taAberto(new Date(2015, 1, 1, 18, 30)));
