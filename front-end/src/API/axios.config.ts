import axios from 'axios';

const baseURL = "http://localhost:3000/api/v1/"

const API = axios.create({
  baseURL,
});
console.log(baseURL)
// Add a request interceptor to include the API key in every request


export default API;