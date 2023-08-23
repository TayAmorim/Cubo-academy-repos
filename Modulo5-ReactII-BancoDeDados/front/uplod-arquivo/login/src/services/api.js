import axios from 'axios';

export default axios.create({
  baseURL: 'https://public-profile-cubos.herokuapp.com',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});