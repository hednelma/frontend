import axios from 'axios'

const api_administrador = axios.create({
    baseURL: 'http://194.210.91.132:4041/administrador/'
})
export default api_administrador