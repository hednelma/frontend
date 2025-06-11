import { Alert } from "react-native"
import api_cliente from "../../../server/api_cliente"


const doEvaluation = async (clientId, professionalId, serviceId, rating, comments, setIsSubmitted) => {
    try {

        const evaluation = await api_cliente.post('/evaluation', { clientId, professionalId, serviceId, rating, comments })

        if (evaluation.status === 200) {
            setIsSubmitted(true)
            Alert.alert("Obrigado!", "Sua avaliação foi enviada com sucesso!")
        }

    } catch (error) {
         Alert.alert("ERRO!", "Ocorreu um erro ao enviar sua avaliação")
        console.log(error)
    }
}

export default doEvaluation