import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import buscarServicos from '../../../função/administrador/servico/buscarServiço'
import addServicoProfissional from '../../../função/administrador/profissional/addServicoProfissional'


const AdicionarServicoProfissional = ({ navigation, route }) => {

    const [services, setServices] = useState([])
    const [selectedServices, setSelectedServices] = useState([])
    const profissional = route.params.profissional


    useFocusEffect(
        useCallback(() => {
            buscarServicos(setServices)
        }, [])
    )




    const addOrRemoveServiceToList = (serviceId) => {
        if (selectedServices.includes(serviceId)) {
            setSelectedServices(selectedServices.filter(item => item !== serviceId))
        } else {
            setSelectedServices([...selectedServices, serviceId])
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>


                <View style={styles.servicesList}>
                    {services.map((service, index) => (
                        <View key={index} style={styles.serviceItem}>
                            <TouchableOpacity onPress={() => navigation.navigate('InformaçãoServico', { service: service })} style={styles.serviceTextContainer}>
                                <Image
                                    source={{ uri: service?.imagem ? `http://194.210.105.253:4041/cliente/${service.imagem}` : `http://194.210.105.253:4041/cliente/uploads/image.jpg  ` }} style={styles.image}
                                    resizeMode="cover"
                                />
                                <View>
                                    <Text style={styles.serviceNome}>{service.nome}</Text>
                                    <Text style={styles.serviceDuracao}>{service.duracao} min .  {service.preco}€</Text>

                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.deleteButton} onPress={() => addOrRemoveServiceToList(service.id)}>
                                {
                                    selectedServices.includes(service.id) ? <Icon name="delete" style={{ padding: 8, backgroundColor: 'red', borderRadius: 50 }} size={24} color="white" /> : <Icon name="add" style={{ padding: 8, backgroundColor: '#fbde88', borderRadius: 50 }} size={24} color="white" />
                                }
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Botão flutuante amarelo no canto inferior direito */}
          {
                selectedServices.length > 0 && (
                    <TouchableOpacity onPress={()=> addServicoProfissional(profissional.id, selectedServices, navigation)} style={styles.addListButton}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} >Atribuir</Text>
                    </TouchableOpacity>

                )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 80,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#000',
        textTransform: 'uppercase',
    },
    servicesList: {
        width: '100%',
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fbde89',
        borderRadius: 10,
        marginBottom: 4,
    },
    serviceTextContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
    },
    serviceName: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    servicePrice: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    deleteButton: {
        padding: 5,
    },
    addListButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#fbde88',
        width: '90%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 5,
    },

    image: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }
})

export default AdicionarServicoProfissional