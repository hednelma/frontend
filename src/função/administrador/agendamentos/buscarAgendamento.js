import api_administrador from "../../../server/api_administrador"

const buscarAgendamento = async (setAgendamento, setAgendamentosCopia) => {
    try {
        const response = await api_administrador.get('/get/all/agendamentos')
        setAgendamento(response.data)
        setAgendamentosCopia(response.data)
    } catch (error) {
        console.log(error)
        setAgendamento([])
    }
}

export default buscarAgendamento