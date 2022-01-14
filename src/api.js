import axios from 'axios';

const api = axios.create({
    baseURL: 'mongodb+srv://Rafapearl:pearl19081@cluster0.co1dy.mongodb.net/financeiro'
});

export default api;