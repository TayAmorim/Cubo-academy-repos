import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3334",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
