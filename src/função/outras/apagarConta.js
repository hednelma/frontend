import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"
import romocaodeConta from "./remocaodeConta"

const alertadeRemocaodeConta
 = (user ,navigation) => {
    Alert.alert(
        "REMOÇÃO DE CONTA",
        "Você está preste a fazer remoção da sua conta. Pretende mesmo continuar?",
        [
            { text: "CANCELAR", style: 'cancel' },
            {
                text: "SIM", onPress: async () => {
                  
                   await romocaodeConta(user ,navigation)                    
                }
            },
        ]
    )

}

export default alertadeRemocaodeConta
