import axios from 'axios'

const api_visitante = axios.create({
    baseURL: 'http://194.210.91.132:4041/visitante'
})
export default api_visitante  