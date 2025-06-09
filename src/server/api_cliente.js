import axios from 'axios'

const api_cliente = axios.create({
    baseURL: 'http:///194.210.89.81:4041/cliente/'
})
export default api_cliente