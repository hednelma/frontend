import api_cliente from "../../server/api_cliente"




const encontrarMeusAdendamentosProfissional = async(profissionalId, setAgendamentos, setAgendamentosCopia) => {


    try{

        const agendamentos = await api_cliente.get(`/buscar/meus/agendamentos/profissional/${profissionalId}`)
        setAgendamentos(agendamentos.data)
        setAgendamentosCopia(agendamentos.data.filter(agendamentos => agendamentos.status === 'pendente'))

        


    }catch (error) {
        console.error(error)
        setAgendamentos([])
        setAgendamentosCopia([])

    }
}

export default encontrarMeusAdendamentosProfissional