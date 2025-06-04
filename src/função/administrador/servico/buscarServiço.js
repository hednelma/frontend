import api_administrador from "../../../server/api_administrador"

const buscarServicos = async (setServices) =>{
    try{
        const servicos = await api_administrador.get('/find/all/services')
          setServices(servicos.data)
    
    } catch(erro) {
        setServices([])
        console.error(erro)
    }
}

export default buscarServicos