import api_cliente from "../../../server/api_cliente";
import encontrarMeusAdendamentos from "./encontrarMeusAgendamentos";

const cancelarAgendamento = async (clienteId, agendamentoId, setAgendamentos, setAgendametoscopy) =>{
    try{
        const response = await api_cliente.delete('/delete/my/agendamento/' + agendamentoId)
        if (response.status === 200) {
            await encontrarMeusAdendamentos(clienteId, setAgendamentos, setAgendametoscopy)
        }

    }catch (error) {
        console.log(error)
    }
}

export default cancelarAgendamento