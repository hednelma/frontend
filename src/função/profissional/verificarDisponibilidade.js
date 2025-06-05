import api_cliente from "../../server/api_cliente"
import agendamento from "../../styles/agendamento"




const verificarDiponibilidade= async(profissionalId, setAgendamentos, formatDate) => {


    try{

        const agendamentos = await api_cliente.get(`/buscar/meus/agendamentos/time/profissional/${profissionalId}`)
        const horas = agendamentos.data.map(agendamento => { return formatDate(agendamento.data_hora)})
          setAgendamentos(horas)
       


    }catch (error) {
        console.log(error)
        setAgendamentos([])
       

    }
}

export default verificarDiponibilidade