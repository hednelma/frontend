import React, { useCallback, useState, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../../../context/AuthContext'
import buscarAgendamento from '../../../função/administrador/agendamentos/buscarAgendamento'


const TodosAgendamentos= () => {

  const [isNext, setIsNext] = useState(true)
  const [agendamentos, setAgendamentos] = useState(true)
  const [agendamentosCopia, setAgendamentosCopia] = useState([])

  const { user } = useContext(AuthContext)



  const selectNextOrPass = () => {
    setIsNext(!isNext)
    setAgendamentosCopia(isNext ? agendamentos.filter(a => a.status === 'realizado') : agendamentos.filter(a => a.status === 'pendente'))


  }

  useFocusEffect(
    useCallback(() => {
     buscarAgendamento(setAgendamentos, setAgendamentosCopia)
    }, [])
  )

  const formatDateToBrazilian = (dateString) => {
    const months = [  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro',  'novembro',  'dezembro', ]

    const [year, month, day] = dateString.split('-')
    const monthIndex = parseInt(month, 10) - 1

    return `${months[monthIndex]} ${day}, ${year}`
}

  return (
    <View style={styles.container}>
      <View style={styles.container_btn}>
        <TouchableOpacity onPress={selectNextOrPass} style={[styles.btn, { backgroundColor: isNext ? '#fbde88' : 'white' }]}>
          <Text style={styles.btn_text}>Passados</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={selectNextOrPass} style={[styles.btn, { backgroundColor: isNext ? 'white' : '#fbde88' }]}>
          <Text style={styles.btn_text}>Próximos</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={agendamentosCopia}
        renderItem={({ item }) => (
          <View style={[styles.agendamentoItem, { flexDirection: 'row', gap: 6 }]}>
            <Image source={{ uri: item.servico.imagem ? `http:///194.210.91.225:4041/cliente/${item.servico.imagem}` : `http:///194.210.91.225:4041/cliente/uploads/image.jpg  ` }} style={{ width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
            <View>
              <Text style={styles.serviceText}>{item.servico.nome}</Text>
              <Text style={styles.priceText}>{item.servico.preco} €</Text>
              
              <Text style={styles.dateText}>{item.data_hora.split(' ')[1]}   -  {formatDateToBrazilian(item.data_hora.split(' ')[0])}</Text>
            </View>
          </View>
        )}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
  },

  container_btn: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#fbde89',
    marginBottom: 10,
    borderRadius: 10,
    height: 50,
    justifyContent: 'space-between'
  },

  btn: {
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
  },


  btn_text: {
    fontSize: 16,
  },



  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  agendamentoItem: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  serviceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 16,
    color: '#555',
  },
  timeText: {
    fontSize: 16,
    color: '#555',
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
})

export default TodosAgendamentos