import api_administrador from "../../../server/api_administrador"


const addServicoProfissional = async (profissionalId, services, navigation) => {

    try {
        
        const response = await api_administrador.post("/add/service/ao/profissional", {profissionalId, services})

        if (response && response.status === 200) {
            navigation.goBack()

        }

    } catch (erro) {
        console.error("Erro ao adicionar servico:", erro)
    }
}


export default addServicoProfissional