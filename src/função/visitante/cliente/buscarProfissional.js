import api_administrador from "../../../server/api_administrador"
import filtrarCliente from "../../administrador/filtrarCliente"





const buscarProfissional = async(setClientes, setClientesFiltred) => {
    
    try{
        const clientes = await api_administrador.get('/find/all/clientes')
        if(clientes){
            filtrarCliente(1,clientes.data, setClientes)
            filtrarCliente(1,clientes.data, setClientesFiltred)
        }

    } catch(error) {
        setClientesFiltred([])
        setClientesFiltred([])
    }

}
export default buscarProfissional