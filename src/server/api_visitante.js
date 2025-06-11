import axios from 'axios'

const api_visitante = axios.create({
    baseURL: 'http:///194.210.90.33:4041/visitante'
})
export default api_visitante  