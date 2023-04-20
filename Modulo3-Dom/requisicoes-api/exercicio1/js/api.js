const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: { "Content-Type": "Application/json" },
});

async function users() {
  const response = await api.get("/users");
  return response;
}
