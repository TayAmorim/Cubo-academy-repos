const body = document.querySelector("body");

async function users() {
  const response = await api.get("/users");
  const dataResponse = response.data;
  dataResponse.forEach((user) => {
    body.innerHTML += `
  <div class="card">
  <h1>${user.name}</h1>
  <span>${user.email}</span>
  <strong>${user.phone}</strong>
  </div>`;
  });
}

users();
