const { differenceInDays } = require("date-fns");

let initialDate = new Date(2020, 5, 1);
let requestedDate = new Date(2020, 2, 1);

function promotionValid(initialDate, requestedDate) {
  const hoursDiference = Math.abs(differenceInDays(initialDate, requestedDate));
  if (hoursDiference >= 24) return false;
  return true;
}

console.log(promotionValid(initialDate, requestedDate));
