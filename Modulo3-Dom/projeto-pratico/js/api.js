const api = axios.create({
  baseURL: "https://api-crud-user.pedagogico.cubos.academy",
  timeout: 10000,
  headers: { "Content-Type": "Application/json" },
});
