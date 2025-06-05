import axios from 'axios'

const api_visitante = axios.create({
    baseURL: 'http://194.210.105.253:4041/visitante'
})
export default api_visitante  