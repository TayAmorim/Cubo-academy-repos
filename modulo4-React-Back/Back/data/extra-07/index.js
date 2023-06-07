const { differenceInDays } = require("date-fns");

let initialDate = new Date(2020, 5, 1);
let requestedDate = new Date(2020, 5, 2);

function promotionValid(initialDate, requestedDate) {
  const hoursDiference = Math.abs(differenceInDays(initialDate, requestedDate));
  if (hoursDiference >= 30) return false;
  return true;
}

console.log(promotionValid(initialDate, requestedDate));
