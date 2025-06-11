import api_cliente from "../../../server/api_cliente"



const buscarAvaliacaoProfissional = async (professionalId, setAvaliacoes) => {

    try {
        const appointments = await api_cliente.get(`/evaluation/${professionalId}`)
        setAvaliacoes(appointments.data)

    } catch (error) {
        console.error(error)
        console.log("Errei aqui...")
        setAvaliacoes([])
    }
}

export default buscarAvaliacaoProfissional