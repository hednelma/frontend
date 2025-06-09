import axios from 'axios'

const api_visitante = axios.create({
    baseURL: 'http:///194.210.89.81:4041/visitante'
})
export default api_visitante  