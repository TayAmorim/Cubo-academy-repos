const cards = document.querySelectorAll(".card");

async function users() {
  const response = await api.get("/users");

  for (let i = 0; i < cards.length; i++) {
    cards[i].children[0].innerText = response.data[i].name;
    cards[i].children[1].innerText = response.data[i].email;
    cards[i].children[2].innerText = response.data[i].phone;
  }
}

users();
