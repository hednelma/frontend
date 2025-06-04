
import { Alert } from "react-native"
import removerServico from "../administrador/servico/removerServico"


const alertaRemoverServico = (id ,setServices) => {
    Alert.alert(
        "REMOÇÃO DE SERVIÇO",
        "Você está preste a fazer remoção do serviço. Pretende mesmo continuar?",
        [
            { text: "CANCELAR", style: 'cancel' },
            {
                text: "SIM", onPress: async () => {
                    await removerServico(id, setServices)
                  
                                      
                }
            },
        ]
    )

}

export default alertaRemoverServico