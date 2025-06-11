
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground, TouchableOpacity, FlatList, Text, View, Image } from 'react-native'
import { StyleSheet } from "react-native"
import buscarServicoProfissional from '../../../função/visitante/cliente/buscarServicoProfissional'
import removeServicoProfissional from '../../../função/administrador/profissional/removerServico';
import removerProfissional from '../../../função/administrador/profissional/removerProfissional';





const AdminVerProfissional = ({ navigation, route }) => {

    const profissional = route.params.profissional
    const [services, setServices] = useState([])


    useFocusEffect(
        useCallback(() => {
            buscarServicoProfissional(profissional.id, setServices)

        }, [])
    )


    return (
        <View style={seeprofessionalStyles.container}>

            <ImageBackground source={{ uri: profissional?.foto ? `http://194.210.90.33:4041/cliente/${profissional?.foto}` : `http://194.210.90.33:4041/cliente/uploads/image.jpg  ` }} style={seeprofessionalStyles.backgroundImage}></ImageBackground>
           <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
             <TouchableOpacity onPress={() => navigation.goBack()} style={seeprofessionalStyles.btn}>
                <Icon name="arrow-left" size={20} style={seeprofessionalStyles.contentTextButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>  removerProfissional(profissional.id, navigation)} style={[seeprofessionalStyles.btnDelete, {backgroundColor: 'red', borderRadius: 100, padding: 3, margin: 2}]}>
                <Icon name="delete" size={20} color='white' style={seeprofessionalStyles.contentTextButton} />
            </TouchableOpacity>
           </View>
            <View style={seeprofessionalStyles.container_2} >
                <Text style={seeprofessionalStyles.header}>{profissional.nome}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', pedding: 8 }}>
                    <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold' }}>Serviços</Text>
                    <Text disabled = {services.length > 0} onPress={() => navigation.navigate('AddServicoProfissional', { profissional: profissional })} style={services.length > 0 ? { alignSelf: 'flex-start', fontWeight: 'bold', backgroundColor: 'gray', borderRadius: 20, padding: 8, color: 'white' } : { alignSelf: 'flex-start', fontWeight: 'bold', backgroundColor: '#fbde88', borderRadius: 20, padding: 8 }}>Adicionar</Text>
                </View>
                <View>
                    <FlatList
                        data={services}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={seeprofessionalStyles.item}>
                                <View style={{ flexDirection: 'row', gap: 3 }}>
                                    <Image source={{ uri: item.imagem ? `http://194.210.90.33:4041/cliente/${item.imagem}` : `http://194.210.90.33:4041/cliente/uploads/image.jpg  ` }} style={{ width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                                    <View>
                                        <Text>{item.nome}</Text>
                                        <Text>{item.duracao}min - {item.preco}€</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={[seeprofessionalStyles.itemIcon, {backgroundColor: 'red'}]} onPress={() => removeServicoProfissional(profissional.id, item.id, setServices)}>
                                     <Icon name="delete" size={30} color="white" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>

        </View>
    )
}

const seeprofessionalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: 'white'
    },

    container_2: {
        marginTop: '40%',
        paddingStart: 10,
        paddingEnd: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white'
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    item: {
        backgroundColor: 'white',
        borderColor: '#fbde89',
        borderWidth: 1,
        height: 100,
        marginVertical: 5,
        justifyContent: 'space-between',
        borderRadius: 8,
        flexDirection: 'row'
    },

    itemIcon: {
        backgroundColor: '#fbde86',
        borderRadius: 50,
        height: 60,
        width: 60,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginEnd: 10
    },

    btnDelete: {
        backgroundColor: '#fbde86',
        borderRadius: 50,
        height: 30,
        width: 30,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginEnd: 10
    },

    title: {
        fontSize: 18,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '55%'
    },
    btn: {
        width: 40,
        margin: 20
    },

    btnAgendar: {
        width: '70%',
        height: 45,
        borderRadius: 50,
        backgroundColor: '#fbde89',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 30
    },

    textBtn: {
        fontSize: 16
    }
})

export default AdminVerProfissional