import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})