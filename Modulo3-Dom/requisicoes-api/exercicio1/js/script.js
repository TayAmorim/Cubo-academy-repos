const body = document.querySelector("body");

async function init() {
  const responseData = await users();
  getUser(responseData);
}
init();

function getUser(responseData) {
  const users = responseData.data;
  users.forEach((user) => {
    body.innerHTML += `
    <div class="card">
    <h1>${user.name}</h1>
    <span>${user.email}</span>
    <strong>${user.phone}</strong>
    </div>`;
  });
}
