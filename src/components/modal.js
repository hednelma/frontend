import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const Modals = ({ modalVisible, setModalVisible, navigation }) => {

    return (

        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>

            <View style={styles.modalView}>

                <View style={styles.d_flex}>
                    <Text style={styles.modalHeader}>O meu perfil</Text>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <Icon name='close' size={24} color="#000" />
                    </TouchableWithoutFeedback>

                </View>

                <View style={styles.menuSection}>
                    <TouchableOpacity onPress={() => { navigation.navigate('listadeUsuarios'); setModalVisible(false) }} style={styles.menuItem}>
                        <Text> <Icon name='users' size={24} color="#000" /> Ususários</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('listaServicos'); setModalVisible(false) }} style={styles.menuItem}>
                        <Text> <Icon name='wrench' size={24} color="#000" /> Serviços do salão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>{navigation.navigate('agendamentosAdmin'); setModalVisible(false)}} style={styles.menuItem}>
                        <Text> <Icon name='calendar' size={24} color="#000" />Agendamentos</Text>
                    </TouchableOpacity>
                </View>





                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>V2.5.30</Text>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalView: {
        right: 0,
        top: 'auto',
        bottom: 0,
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        marginTop: 10,
        height: '100%',
        borderTopEndRadius: 30,
        elevation: 2
    },

    d_flex: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },

    modalHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    menuSection: {
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 15,
    },
    menuItem: {
        paddingVertical: 12,
    },

    versionContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
})

export default Modals