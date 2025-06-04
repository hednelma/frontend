import { Alert } from 'react-native'

const  mudancadeProfissional = (professional, newProfessional, setSelectedProfessional) => {
  Alert.alert(
    'Alterar Profissional',
    `Você está prestes a alterar o profissional selecionado (${professional.name}) para (${newProfessional.name}). Deseja continuar?`,
    [
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => {

        },
      },
      {
        text: 'Confirmar',
        onPress: () =>  {
            setSelectedProfessional(newProfessional)
        },
      },
    ],
    { cancelable: false }
  )
}

export default mudancadeProfissional