const car = {
  names: "Honda",
  year: 2022,
  color: "white",
};

const ownerContact = {
  phoneContact: "(00) 00000-0000",
  owner: "Daniel",
};

const { names, year, color } = car;
const { phoneContact, owner } = ownerContact;

const infosForSale = {
  names,
  year,
  color,
  phoneContact,
  owner,
  price: 120000,
  onlySale: true,
};

console.log(infosForSale);
