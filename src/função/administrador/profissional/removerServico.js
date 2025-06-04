import api_administrador from "../../../server/api_administrador"
import buscarServicoProfissional from "../../visitante/cliente/buscarServicoProfissional"


const removeServicoProfissional = async (profissionalId, serviceId, setServices) => {

    console.log(profissionalId)

    try {
        const response = await api_administrador.delete(`/remover/service/ao/profissional/${profissionalId}/${serviceId}`)

        if ( response.status === 200) {
          buscarServicoProfissional(profissionalId, setServices)
        }

    } catch (erro) {
        console.error("Erro ao remover servico:", erro)
    }
}


export default removeServicoProfissional