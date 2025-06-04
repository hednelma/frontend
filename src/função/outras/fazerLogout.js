import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

const alertLogout = (navigation) => {
    Alert.alert(
        "Fazer logout",
        "Você está preste a fazer logout. Pretende mesmo continuar?",
        [
            { text: "CANCELAR", style: 'cancel' },
            {
                text: "SIM", onPress: async () => {
                    await AsyncStorage.removeItem('user')
                    await AsyncStorage.removeItem('userToken')
                    navigation.replace('Login')
                }
            },
        ]
    )

}

export default alertLogout