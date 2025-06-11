import React, { useCallback, useState, useContext, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../../context/AuthContext'
import encontrarMeusAdendamentosProfissional from '../../função/profissional/encontrarMeusAgendamentos'
import agendamento from '../../styles/agendamento'

const MeusAgendamentosProfissional = () => {

  const [isNext, setIsNext] = useState(true)
  const [agendamentos, setAgendamentos] = useState([])
  const [agendamentosCopia, setAgendamentosCopia] = useState([])
  const { user } = useContext(AuthContext)
  const [selectedDay, setSelectedDay] = useState(0)
  const [days, setDays] = useState([])

  // Gera dias úteis (segunda a sexta-feira)
  const getWeekDays = (daysToShow = 5) => {
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const monthsOfYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const weekDaysArray = [];
    let count = 0, i = 0;

    while (count < daysToShow) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      const dayIndex = currentDate.getDay();

      if (dayIndex >= 1 && dayIndex <= 5) {
        const dayName = daysOfWeek[dayIndex];
        const dayNumber = currentDate.getDate();
        const monthName = monthsOfYear[currentDate.getMonth()];
        const fullDate = new Date(currentDate.setHours(0, 0, 0, 0));
        weekDaysArray.push({ day: dayName, date: dayNumber.toString(), month: monthName, fullDate, year: currentDate.getFullYear() })
        count++;
      }
      i++;
    }

    return weekDaysArray;

  }



  const getDaySeletedTocompare = (value) => {
    console.log(value)
    return `${value?.month.toLowerCase()} ${parseInt(value?.date)}, ${value?.year}`
  }

  const selectNextOrPass = (isNext) => {
    setIsNext(isNext)
    handleSelectDay(isNext, selectedDay)
  }

  useFocusEffect(
    useCallback(() => {
      setDays(getWeekDays(30))
      encontrarMeusAdendamentosProfissional(user.id, setAgendamentos, setAgendamentosCopia)
    }, [])
  )

  useEffect(() => {
    setAgendamentosCopia(agendamentos.filter(ap => ap.status === 'pendente' && formatDateToBrazilian(ap.data_hora.split(' ')[0]) === getDaySeletedTocompare(days[selectedDay])))
  }, [agendamentos])


  const formatDateToBrazilian = (dateString) => {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',]

    const [year, month, day] = dateString.split('-')
    const monthIndex = parseInt(month, 10) - 1

    return `${months[monthIndex]} ${parseInt(day)}, ${year}`
  }


  const handleSelectDay = (isNext, index) => {

    setSelectedDay(index)

    if (isNext)
      setAgendamentosCopia(agendamentos.filter(ap => ap.status === 'pendente' && formatDateToBrazilian(ap.data_hora.split(' ')[0]) === getDaySeletedTocompare(days[index])))
    else
      setAgendamentosCopia(agendamentos.filter(ap => ap.status === 'realizado' && formatDateToBrazilian(ap.data_hora.split(' ')[0]) === getDaySeletedTocompare(days[index])))

  }

  return (
    <View style={styles.container}>
      <View style={[agendamento.daysContainer, { gap: 3 }]}>
        <FlatList data={days} horizontal keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={[agendamento.dayButton, selectedDay === index && agendamento.selectedDay, { width: 100, margin: 3 }]} onPress={() => handleSelectDay(isNext, index)}>
              <Text style={agendamento.dayText}>{item.day}</Text>
              <Text style={agendamento.dateText}>{item.date}</Text>
              <Text style={agendamento.monthText}>{item.month}</Text>
            </TouchableOpacity>)} />
      </View>



      <View style={styles.container_btn}>
        <TouchableOpacity onPress={() => selectNextOrPass(false)} style={[styles.btn, { backgroundColor: isNext ? '#fbde88' : 'white' }]}>
          <Text style={styles.btn_text}>Passados</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => selectNextOrPass(true)} style={[styles.btn, { backgroundColor: isNext ? 'white' : '#fbde88' }]}>
          <Text style={styles.btn_text}>Próximos</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={agendamentosCopia}
        renderItem={({ item }) => (
          <View style={[styles.agendamentoItem, { flexDirection: 'row', gap: 6 }]}>
            <Image source={{ uri: item.servico.imagem ? `http://194.210.90.33:4041/cliente/${item.servico.imagem}` : `http://194.210.90.33:4041/cliente/uploads/image.jpg  ` }} style={{ width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
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

export default MeusAgendamentosProfissional