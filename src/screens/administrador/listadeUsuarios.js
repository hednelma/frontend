import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getClientes from '../../função/administrador/getClientes';
import filtrarCliente from '../../função/administrador/filtrarCliente';
import { useFocusEffect } from '@react-navigation/native';


const ListadeUsuarios = ({navigation}) => {

    const [isNext, setIsNext] = useState(true)
    const [cliente, setClientes] = useState([])
    const [clientesFiltred, setClientesFiltred] = useState([])



    useEffect(()=> {
        getClientes(setClientes, setClientesFiltred)
    }, [])

    useFocusEffect(
        useCallback(()=> {
             getClientes(setClientes, setClientesFiltred)
    }, []) 
        
    )

   const Item = ({ user, navigation }) => (
      <TouchableOpacity onPress={() => navigation.navigate('AdminVerProfissional', {profissional: user})} style={styles.item}>
        <Image source={{ uri: user.foto ? `http:///194.210.91.225:4041/cliente/${user.foto}` :  `http:///194.210.91.225:4041/cliente/uploads/image.jpg  `}} style={styles.image} />
        <Text style={styles.title}>{user.nome}</Text>
      </TouchableOpacity>
    )
    

    const renderItem = ({ item }) => (
        <Item user={item} navigation={navigation} />
      )

    return (
        <View style={styles.container}>
            <View style={styles.container_btn}>
                <TouchableOpacity onPress={() =>{ setIsNext(false); filtrarCliente(2, cliente, setClientesFiltred)}} style={[styles.btn, { backgroundColor: isNext ? '#fbde88' : 'white' }]}>
                    <Text style={styles.btn_text}>Clientes</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setIsNext(true); filtrarCliente(1, cliente, setClientesFiltred) }} style={[styles.btn, { backgroundColor: isNext ? 'white' : '#fbde88' }]}>
                    <Text style={styles.btn_text}>Profissionais</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                            data={clientesFiltred}
                            renderItem={(profissional) => renderItem(profissional, navigation)}
                           
                        />               
           {
            isNext && (
                
            <TouchableOpacity onPress={()=> navigation.navigate('AddProfissional')} style={styles.addListButton}>
            <Icon name="add" size={30} color="white" />
        </TouchableOpacity>
            )
           }

        </View>
        


    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingTop: 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '48%',
    },
    columnTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    userName: {
        fontSize: 14,
        marginBottom: 8,
        color: '#555',
    },
    emptyText: {
        fontSize: 14,
        color: '#999',
        fontStyle: 'italic',
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

    addListButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#fbde88', 
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },

    item: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
      },
    
      title: {
        fontSize: 20,
        marginTop: 'auto',
        marginBottom: 'auto'
      },
      
      image: {
        width: 40,
        height: 40,
        borderRadius: 20, // Para imagens redondas
        marginRight: 16,
      },
});

export default ListadeUsuarios;