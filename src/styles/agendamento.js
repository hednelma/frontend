import { StyleSheet } from "react-native"

const agendamento = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dayButton: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '23%',
    },
    selectedDay: {
        backgroundColor: '#fbde89',
        borderColor: '#6200ee',
    },
    dayText: {
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    monthText: {
        fontSize: 12,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15,
    },
    timesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    timeButton: {
        width: '48%',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    selectedTime: {
        backgroundColor: '#fbde89',
        borderColor: '#6200ee',
    },
    timeText: {
        color: '#000',
    },
    professionalsContainer: {
        height: 120
    },
    professionalButton: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
    },
    selectedProfessional: {
        backgroundColor: '#6200ee',
        borderColor: '#6200ee',
    },
    professionalText: {
        color: '#000',
    },
    confirmButton: {
        backgroundColor: '#fbde88',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 50,
        width: '80%',
        alignSelf: 'center'
    },
    disabledButton: {
        backgroundColor: '#cccccc',
        borderRadius: 50,
        width: '80%',
        alignSelf: 'center'
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    item: {
        backgroundColor: 'white',
        borderColor: '#fbde89',
        borderWidth: 1,
        height: 100,
        marginVertical: 5,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 4
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3
    },

    prof_item: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    circle_text: {
        fontSize: 20
    }
})

export default agendamento