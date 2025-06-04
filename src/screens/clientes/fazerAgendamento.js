import alertQuit from "../../função/outras/alertaAgendaSucesso"
import api_cliente from "../../server/api_cliente"

const fazerAgendamento = async(clienteId, profissionalId, servicoId, data_hora, navigation) =>{
    try{
        const novo_agendamento = await api_cliente.post('/fazer/agendamento', {clienteId, profissionalId, servicoId, data_hora})
        if(novo_agendamento.status === 200){
            alertQuit(navigation)
        }
        else{


        }
    }catch (error){
        console.log('Não foi possivel realizar a reserva', error)
    }
}

export default fazerAgendamento