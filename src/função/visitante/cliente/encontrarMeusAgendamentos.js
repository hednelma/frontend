import api_cliente from "../../../server/api_cliente"



const encontrarMeusAdendamentos = async(clienteId, setAgendamentos, setAgendamentosCopia) => {


    try{

        const agendamentos = await api_cliente.get(`/encontrar/meus/agendamentos/${clienteId}`)
        setAgendamentos(agendamentos.data)
        setAgendamentosCopia(agendamentos.data.filter(agendamentos => agendamentos.status === 'pendente'))

        


    }catch (error) {
        console.error(error)
        setAgendamentos([])
        setAgendamentosCopia([])

    }
}

export default encontrarMeusAdendamentos