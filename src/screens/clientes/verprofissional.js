
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ImageBackground, TouchableOpacity, FlatList, Text, View, Image } from 'react-native'
import { StyleSheet } from "react-native"
import buscarServicoProfissional from '../../função/visitante/cliente/buscarServicoProfissional'




const VerProfissional = ({ navigation, route }) => {

  const profissional = route.params.profissional

  const [selectedServices, setSelectedServices] = useState(null)
  const [services, setServices] = useState([])

  const selectedAndUnSelectedServices = (service) => {
    setSelectedServices(service)
  }



  useFocusEffect(
    useCallback(() => {
      buscarServicoProfissional(profissional.id, setServices)

    }, [])
  )


  return (
    <View style={seeprofessionalStyles.container}>

      <ImageBackground source={{ uri: profissional?.foto ? `http:///194.210.89.81:4041/cliente/${profissional?.foto}` : `http:///194.210.89.81:4041/cliente/uploads/image.jpg  ` }} style={seeprofessionalStyles.backgroundImage}></ImageBackground>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={seeprofessionalStyles.btn}>
        <Icon name="arrow-left" size={20} style={seeprofessionalStyles.contentTextButton} />
      </TouchableOpacity>
      <View style={seeprofessionalStyles.container_2} >
        <Text style={seeprofessionalStyles.header}>{profissional.nome}</Text>
        <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold' }}>Serviços</Text>
        <View>
          <FlatList
            data={services}
            renderItem={({ item }) => (
              <TouchableOpacity style={seeprofessionalStyles.item}>
                <View style={{ flexDirection: 'row', gap: 3 }}>
                  <Image source={{ uri: item.imagem ? `http:///194.210.89.81:4041/cliente/${item.imagem}` : `http:///194.210.89.81:4041/cliente/uploads/image.jpg  ` }} style={{ width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                  <View>
                    <Text>{item.nome}</Text>
                    <Text>{item.duracao}min - {item.preco}€</Text>
                  </View>
                </View>
                <TouchableOpacity style={seeprofessionalStyles.itemIcon} onPress={() => selectedAndUnSelectedServices(item)}>
                  {
                    item === selectedServices ?
                      <Icon name="check" size={30} color="white" />
                      :
                      <Icon name="plus" size={30} color="white" />
                  }

                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      {
        selectedServices ?
          (
            <TouchableOpacity onPress={() => navigation.navigate('DoAgendamento', { service: selectedServices, profissional: profissional })} style={seeprofessionalStyles.btnAgendar}>
              <Text style={seeprofessionalStyles.textBtn}>Agendar</Text>
            </TouchableOpacity>
          )
          :
          (
            ''
          )
      }

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

export default VerProfissional