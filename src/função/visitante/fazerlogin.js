import AsyncStorage from "@react-native-async-storage/async-storage"
import api_visitante from "../../server/api_visitante"



const doLogin = async (nomeutilizador, senha, setErro, navigation, setIsAuthenticated, setUser) => {

    try {

        const login = await api_visitante.post('/login', { nomeutilizador, senha })
        if (login.status == 200)


        await AsyncStorage.setItem('userToken', login.data.token)
        await AsyncStorage.setItem('user', JSON.stringify(login.data.user))
        setUser(login.data.user)
        setIsAuthenticated(true)
        navigation.replace('Home')
        setErro('')

    } catch (error) {

        if (error.status === 401 || error.status === 404)
            setErro('Nome do utilizador ou senha incorreta')
        else
            setErro('Erro no login')
    }
}

export default doLogin