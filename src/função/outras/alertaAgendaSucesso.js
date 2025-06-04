import { Alert } from "react-native"

const alertQuit = (navigation) => {
    Alert.alert(
        "Sucesso no agendamento",
        "O Seu agendamento foi efetuado comm sucesso. Para ver o mesmo, no inicial seleciona a opcao 'agendametos'",
        [
            { text: "Entendi", onPress: () => navigation.replace('Home') },
        ]
    )

}

export default alertQuit