
import { Alert } from "react-native"
import removerServico from "../administrador/servico/removerServico"
import cancelarAgendamento from "../visitante/cliente/cancelarAgendamento"


const alertaCancelarAgendamento =  (clienteId, agendamentoId, setAgendamentos, setAgendametoscopy) => {
    Alert.alert(
        "Cancelar agendamento",
        "Você está preste a fazer o cancelamento do agendamento. Pretende mesmo continuar?",
        [
            { text: "CANCELAR", style: 'cancel' },
            {
                text: "SIM", onPress: async () => {
                    await cancelarAgendamento (clienteId, agendamentoId, setAgendamentos, setAgendametoscopy)
                  
                                      
                }
            },
        ]
    )

}

export default alertaCancelarAgendamento