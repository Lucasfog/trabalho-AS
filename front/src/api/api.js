import axios from 'axios';

// Configuração base para as chamadas à API
const api = axios.create({
  baseURL: 'http://localhost:8080/api', //-> trocar pelo endereço da api
  timeout: 5000, 
});

export default api;
