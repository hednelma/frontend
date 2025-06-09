import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import buscarServicos from '../../função/administrador/servico/buscarServiço';
import alertaRemoverServico from '../../função/outras/alertaRemoverServico';

const ListaServicos = ({ navigation }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    buscarServicos(setServices)
  }, [])

  useFocusEffect(
    useCallback(() => {
      buscarServicos(setServices)
    }, [])
  )




  const addNewServiceList = () => {
    navigation.navigate('AdicionarServicos')
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>


        <View style={styles.servicesList}>
          {services.map((service, index) => (
            <View key={index} style={styles.serviceItem}>
              <TouchableOpacity onPress={() => navigation.navigate('InformaçãoServico', { service: service })} style={styles.serviceTextContainer}>
                <Image
                  source={{ uri: service?.imagem ? `http://194.210.89.81:4041/cliente/${service.imagem}` : `http://194.210.89.81:4041/cliente/uploads/image.jpg  ` }} style={styles.image}
                  resizeMode="cover"
                />
                <View>
                  <Text style={styles.serviceNome}>{service.nome}</Text>
                  <Text style={styles.serviceDuracao}>{service.duracao} min .  {service.preco}€</Text>

                </View>
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => alertaRemoverServico(service.id, setServices)}
              >
                <Icon name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Botão flutuante amarelo no canto inferior direito */}
      <TouchableOpacity
        style={styles.addListButton}
        onPress={addNewServiceList}
      >
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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

  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
});

export default ListaServicos;