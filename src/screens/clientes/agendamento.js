import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, ScrollView, View, FlatList, Image } from 'react-native'
import moment from 'moment'
import { AuthContext } from '../../context/AuthContext';
import agendamento from '../../styles/agendamento';
import fazerAgendamento from './fazerAgendamento';
import verificarDiponibilidade from '../../função/profissional/verificarDisponibilidade';

const Agendamento = ({ navigation, route }) => {
    const selectedServices = route.params.service;
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedProfessional, setSelectedProfessional] = useState(route.params.profissional);
    const { user } = useContext(AuthContext);
    const [horasNaoDisponiveis, sethorasNaoDisponiveis] = useState([])
    const [horasNaoDisponiveisCopia, sethorasNaoDisponiveisopia] = useState([])
    const [days, setDays] = useState([]); // Dias dinâmicos
    const [times, setTimes] = useState([]); // Horários


    //funcao para filtrar objeto
    const filterTimes = (value, lista, setResults) => {

        
        if (!value || !lista) return
        const filtered = lista.filter(item => parseInt(item.day) === parseInt(value.date) && item.month === value.month)
        console.log("filtro: ", filtered)
        setResults(filtered.map(item => item.time))
    }



    // Gera dias úteis (segunda a sexta-feira)
    const getWeekDays = (daysToShow = 5) => {
        const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
        const monthsOfYear = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        const weekDaysArray = []
        let count = 0, i = 0

        while (count < daysToShow) {
            const currentDate = new Date()
            currentDate.setDate(currentDate.getDate() + i)
            const dayIndex = currentDate.getDay()
            if (dayIndex >= 1 && dayIndex <= 5) { // De segunda a sexta
                const dayName = daysOfWeek[dayIndex]
                const dayNumber = currentDate.getDate()
                const monthName = monthsOfYear[currentDate.getMonth()]
                const fullDate = new Date(currentDate.setHours(0, 0, 0, 0))
                weekDaysArray.push({
                    day: dayName,
                    date: dayNumber.toString(),
                    month: monthName,
                    fullDate
                })
                count++
            }
            i++
        }

        return weekDaysArray
    }

    const generateTimeSlots = (serviceDurationMinutes = 30) => {
        const times = []
        const startHour = 9
        const endHour = 16
        let currentTimeMinutes = startHour * 60
        const endTimeMinutes = endHour * 60

        while (currentTimeMinutes + serviceDurationMinutes <= endTimeMinutes) {
            const hours = Math.floor(currentTimeMinutes / 60)
            const minutes = currentTimeMinutes % 60
            const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
            times.push(timeString)
            currentTimeMinutes += serviceDurationMinutes
        }

        return times
    }

   const formatDate = (dateString) => {
        if (!dateString) return null
        const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        const data = dateString.split(' ')[0]
        const [year, month, day] = data.split('-')
        const monthIndex = parseInt(month, 10) - 1
        return {
            day,
            month: months[monthIndex],
            year,
            time: dateString.split(' ')[1]
        }
    }

    const selectedDayAndFilter = (index) => {
        setSelectedDay(index)
        setSelectedTime(null)
        if (days[index] && horasNaoDisponiveis.length > 0) {
            console.log("CHEGUEI")
            filterTimes(days[index], horasNaoDisponiveis, sethorasNaoDisponiveisopia)
        }
    }

    const loadData = async () => {
        const weekDays = getWeekDays(10)
        setDays(weekDays)
        setTimes(generateTimeSlots(parseInt(selectedServices.duracao) + 5))

        const handleAvailableTimes = (unavailableTimes) => {
            sethorasNaoDisponiveis(unavailableTimes)
            if (weekDays.length > 0) {
                filterTimes(weekDays[0], unavailableTimes, sethorasNaoDisponiveisopia)
            }
        }

        await verificarDiponibilidade(selectedProfessional.id, handleAvailableTimes, formatDate)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <ScrollView>
            <View style={agendamento.container}>
                {/* Profissional Selecionado */}
                <TouchableOpacity style={agendamento.prof_item}>
                    <Image source={{ uri: selectedProfessional.foto ? `http://194.210.89.81:4041/cliente/${selectedProfessional.foto}` : `http://194.210.89.81:4041/cliente/uploads/image.jpg` }} style={agendamento.circle} />
                    <Text style={agendamento.circle_text}>{selectedProfessional.nome}</Text>
                </TouchableOpacity>

                {/* Serviço Selecionado - Aqui vai aparecer o Total */}
                <TouchableOpacity style={agendamento.item}>
                    <Image source={{ uri: selectedServices.imagem ? `http://194.210.89.81:4041/cliente/${selectedServices.imagem}` : `http://194.210.89.81:4041/cliente/uploads/image.jpg` }} style={{ width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                    <View>
                        <Text>{selectedServices.nome}</Text>
                        <Text>Total: {selectedServices.preco}€</Text>
                    </View>
                </TouchableOpacity>

                {/* Escolha do Dia */}
                <View contentContainerStyle={agendamento.scrollContainer}>
                    <Text style={agendamento.title}>Escolha um dia da semana:</Text>
                    <View style={[agendamento.daysContainer, { gap: 3 }]}>
                        <FlatList data={days} horizontal keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) => (<TouchableOpacity style={[agendamento.dayButton, selectedDay === index && agendamento.selectedDay, { width: 100, margin: 3 }]} onPress={() => selectedDayAndFilter(index)}><Text style={agendamento.dayText}>{item.day}</Text><Text style={agendamento.dateText}>{item.date}</Text><Text style={agendamento.monthText}>{item.month}</Text></TouchableOpacity>)} />
                    </View>

                    {/* Escolha do Horário */}
                    <Text style={agendamento.sectionTitle}>Que horas?</Text>
                    <View style={agendamento.timesContainer}>
                        {times.map((time, index) => (
                            <TouchableOpacity disabled={horasNaoDisponiveisCopia.includes(time)} key={index} style={[horasNaoDisponiveisCopia.includes(time) ? [agendamento.timeButton, { backgroundColor: 'gray'}] : agendamento.timeButton, selectedTime === time && agendamento.selectedTime]} onPress={() => setSelectedTime(time)}>
                                <Text style={agendamento.timeText}>{time}</Text>
                            </TouchableOpacity>))}
                    </View>



                    {/* Botão de Confirmação */}
                    <TouchableOpacity style={[agendamento.confirmButton, (selectedDay === null || selectedTime === null) && agendamento.disabledButton, { marginBottom: 50 }]}
                        disabled={selectedDay === null || selectedTime === null} onPress={() => {
                            if (selectedDay !== null && selectedTime !== null) {
                                const formattedDate = moment(days[selectedDay].fullDate).format('YYYY-MM-DD')
                                const fullDateTime = `${formattedDate} ${selectedTime}` // Formato: "2025-04-05 14:30"

                                fazerAgendamento(user.id, selectedProfessional.id, selectedServices.id, fullDateTime, navigation)
                            }
                        }}>
                        <Text style={agendamento.confirmButtonText}>Confirmar meu agendamento</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Agendamento