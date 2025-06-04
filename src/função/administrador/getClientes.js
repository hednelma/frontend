import api_administrador from "../../server/api_administrador"
import filtrarCliente from "./filtrarCliente"



const getClientes = async(setClientes, setClientesFiltred) => {
    try{
        const clientes = await api_administrador.get('/find/all/clientes')
        if(clientes){
            setClientes(clientes.data)
            filtrarCliente(1, clientes.data, setClientesFiltred)
        }
    } catch(error) {
        setClientesFiltred([])
        setClientesFiltred([])
    }

}


export default getClientes