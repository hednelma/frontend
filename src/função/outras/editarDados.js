import AsyncStorage from "@react-native-async-storage/async-storage"
import api_cliente from "../../server/api_cliente"



const editarDados = async (user, dataToEdit, editType, setError, setUser, setUsser) => {

    const removeSpaces = dataToEdit.trim()

    if (removeSpaces === '' || removeSpaces.length <= 3) {
        setSuccess('')
        if (editType == 1)
            setError('Nome inválido, e conter pelo menos 4 letras')
        else
            setError('Nome do usuário inválido, e conter pelo menos 4 letras')
        return
    }

    if(removeSpaces === user.nomeutilizador.trim() && editType == 2){
       
        setError('')
        return
    }

    if(removeSpaces === user.nome.trim() && editType == 1){
       
        setError('')
        return
    }


    try {

        if (editType === 1) {
            const nome = dataToEdit
            const response = await api_cliente.put(`/edit/my/name/${user.id}`, {
                nome
            })

            if(response.status === 200){
                
                setError('')
                const userAlterado = user
                userAlterado.nome = nome
                setUser(userAlterado)
                setUsser(userAlterado)
                await AsyncStorage.setItem('user', JSON.stringify(userAlterado))
            }
               
        }

        else if (editType === 2) {
            const nomeutilizador = dataToEdit
            const response = await api_cliente.put(`/edit/my/nomeutilizador/${user.id}`, {
                nomeutilizador
            })

            console.log(response)

            if(response.status === 200){
                setError('')
                const userAlterado = user
                userAlterado.nomeutilizador = nomeutilizador
                setUser(userAlterado)
                setUsser(userAlterado)
                await AsyncStorage.setItem('user', JSON.stringify(userAlterado))
            }
        }

        

    } catch (error) {
        setError(error.response?.data.message)
        console.log('deu erro')
    }
}

export default editarDados