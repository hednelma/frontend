
import AsyncStorage from "@react-native-async-storage/async-storage"
import api_cliente from "../../server/api_cliente"



const romocaodeConta = async (user, navigation) => {


    try {

        const response = await api_cliente.delete(`/delete/my/account/${user.id}`)
        if (response.status === 200){

            navigation.replace('Login')
            await AsyncStorage.removeItem('user')
            await AsyncStorage.removeItem('userToken')
        }
           


    } catch (error) {
        setError(error.response?.data.message)
        console.log('deu erro')
    }
}

export default romocaodeConta