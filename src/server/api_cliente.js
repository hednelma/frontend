import axios from 'axios'

const api_cliente = axios.create({
    baseURL: 'http:///194.210.90.33:4041/cliente/'
})
export default api_cliente