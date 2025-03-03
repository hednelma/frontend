import { StyleSheet, Text, View } from 'react-native'

//serve so para colocar texto e imagem, todos os componentes
const Home = ()=> {
  return (
    <View style={styles.container}>
      <View style={styles.container_lembrete}>
        <Text>Lembrete</Text>
        <Text style={styles.text}>Tens um agendamento amanhã as 10h, no salão braids para fazer dreads. Te esperamos</Text>
        <View style={styles.linha}></View>
        <Text>ok</Text>
      </View >

    </View>
  )
}

//serve para fazer todas as estilizacões
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    //espacamento dentro do conteiner
    padding: 10
  },

  container_lembrete: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 150,
    borderRadius: 20,
    borderColor: '#fbde89',
    borderWidth: 1,
    width: '90%',
    //espaçamento dentro do conteiner
    padding: 10
  },

  text: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10
  },

  textor: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 7,
    color: '#fbde89'
  },

  linha: {
    width: '100%',
    marginTop: 'auto',
    borderColor: '#fbde89',
    borderWidth: 0.5
  },

})

export default Home