const { format } = require("date-fns");

const date = new Date(2020, 9, 05);

console.log(format(date, "dd 'de' MMMM 'de' yyyy"));
console.log(format(date, "dd/MMMM/yyyy"));
console.log(format(date, "dd MMM"));
console.log(format(date, "dd MMM yyyy"));
console.log(format(date, "dd 'de' MMM 'de' yyyy"));
console.log(format(date, "dd/yyyy"));
