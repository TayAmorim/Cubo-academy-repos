const { differenceInHours } = require("date-fns");

let initialDate = new Date(2014, 6, 3, 19, 0);
let requestedDate = new Date(2014, 6, 3, 18, 0);

function promotionValid(initialDate, requestedDate) {
  const hoursDiference = Math.abs(
    differenceInHours(initialDate, requestedDate)
  );
  if (hoursDiference >= 24) return false;
  return true;
}

console.log(promotionValid(initialDate, requestedDate));
