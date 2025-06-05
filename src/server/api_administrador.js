import axios from 'axios'

const api_administrador = axios.create({
    baseURL: 'http://194.210.105.253:4041/administrador/'
})
export default api_administrador