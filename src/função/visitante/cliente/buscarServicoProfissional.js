import api_cliente from "../../../server/api_cliente"



const buscarServicoProfissional = async(profId, setServicos) => {

    try {
        const servicos = await api_cliente.get('/find/servicos/profissional/' + profId)
        if (servicos.status === 200) {
            setServicos(servicos.data)
        }

    }catch(error) {
        console.log(error)
        setServicos([])

    }
}

export default buscarServicoProfissional
