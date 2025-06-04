import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, ScrollView, View, FlatList, Image } from 'react-native'
import moment from 'moment'
import homeStyles from '../../styles/home'
import { AuthContext } from '../../context/AuthContext';

const Agendamento = ({ navigation, route }) => {
    const selectedServices = route.params.service;
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [othersProfessional, setothersProfessional] = useState([]);
    const [selectedProfessional, setSelectedProfessional] = useState(route.params.profissional);
    const { user } = useContext(AuthContext);

    const [days, setDays] = useState([]); // Dias dinâmicos
    const [times, setTimes] = useState([]); // Horários

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
                weekDaysArray.push({ day: dayName, date: dayNumber.toString(), month: monthName, fullDate });
                count++;
            }
            i++;
        }

        return weekDaysArray;
    };

    // Gera horários de 9:00 a 16:00 com intervalo de 30 min
    const generateTimeSlots = () => {
        const times = [];
        for (let hour = 9; hour <= 16; hour++) {
            times.push(`${hour}:00`);
            if (hour !== 16) times.push(`${hour}:30`);
        }
        return times;
    };

    useEffect(() => {
        buscarProfissionalMesmoServico(selectedServices.id, setothersProfessional);
        setDays(getWeekDays(5)); // Segunda a Sexta
        setTimes(generateTimeSlots());
    }, []);

    return (
        <ScrollView>
            <View style={agendamento.container}>
                {/* Profissional Selecionado */}
                <TouchableOpacity style={agendamento.prof_item}>
                    <Image source={{ uri: selectedProfessional.foto ? `http://194.210.91.132:4041/cliente/${selectedProfessional.foto}` : `http://194.210.91.132:4041/cliente/uploads/image.jpg` }} style={agendamento.circle} />
                    <Text style={agendamento.circle_text}>{selectedProfessional.nome}</Text>
                </TouchableOpacity>

                {/* Serviço Selecionado - Aqui vai aparecer o Total */}
                <TouchableOpacity style={agendamento.item}>
                    <Image source={{ uri: selectedServices.imagem ? `http://194.210.91.132:4041/cliente/${selectedServices.imagem}` : `http://194.210.91.132:4041/cliente/uploads/image.jpg` }} style={{ width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                    <View>
                        <Text>{selectedServices.nome}</Text>
                        <Text>Total: {selectedServices.preco}€</Text>
                    </View>
                </TouchableOpacity>

                {/* Escolha do Dia */}
                <View contentContainerStyle={agendamento.scrollContainer}>
                    <Text style={agendamento.title}>Escolha um dia da semana:</Text>
                    <View style={[agendamento.daysContainer, { gap: 3 }]}>
                        <FlatList data={days} horizontal keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) => (<TouchableOpacity style={[agendamento.dayButton, selectedDay === index + 1 && agendamento.selectedDay, { width: 100, margin: 3 }]} onPress={() => setSelectedDay(index + 1)}><Text style={agendamento.dayText}>{item.day}</Text><Text style={agendamento.dateText}>{item.date}</Text><Text style={agendamento.monthText}>{item.month}</Text></TouchableOpacity>)} />
                    </View>

                    {/* Escolha do Horário */}
                    <Text style={agendamento.sectionTitle}>Que horas?</Text>
                    <View style={agendamento.timesContainer}>
                        {times.map((time, index) => (<TouchableOpacity key={index} style={[agendamento.timeButton, selectedTime === time && agendamento.selectedTime]} onPress={() => setSelectedTime(time)}><Text style={agendamento.timeText}>{time}</Text></TouchableOpacity>))}
                    </View>

                    {/* Outros Profissionais */}
                    {othersProfessional.length > 0 && (
                        <View style={agendamento.professionalsContainer}>
                            <Text style={agendamento.sectionTitle}>Gostaria de escolher algum profissional?</Text>
                            <FlatList data={othersProfessional} horizontal keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (<TouchableOpacity onPress={() => mudancadeProfissional(selectedProfessional, item, setSelectedProfessional)} style={homeStyles.prof_item}><Image source={{ uri: `http://194.210.91.132:4041/cliente/${item.foto}` }} style={homeStyles.circle} /><Text style={homeStyles.circleText}>{item.nome}</Text></TouchableOpacity>)} />
                        </View>
                    )}

                    {/* Botão de Confirmação */}
                    <TouchableOpacity style={[agendamento.confirmButton, (!selectedDay || !selectedTime) && agendamento.disabledButton, {marginBottom: 50}]}
                        disabled={!selectedDay || !selectedTime} onPress={() => {
                        if (selectedDay !== null && selectedTime !== null) {
                            const formattedDate = moment(days[selectedDay - 1].fullDate).format('YYYY-MM-DD')
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