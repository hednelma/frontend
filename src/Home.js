import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, TextInput, FlatList, ImageBackground, TouchableOpacity, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'
import homeStyles from './styles/home'
import { AuthContext } from './context/AuthContext'
import Modals from './components/modal'
import getClientes from './função/administrador/getClientes'
import buscarServicos from './função/administrador/servico/buscarServiço'
import MeusAgendamentosProfissional from './screens/profissional/meusAgendamentos'


const services = [
  { id: '6', name: 'Twist' },
  { id: '7', name: 'Dreads' },
  { id: '8', name: 'Trança curta' },
]

const Saloon = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [pro, setPros] = useState([])
  const { user } = useContext(AuthContext)
  const [services, setServices] = useState([])

  

  useFocusEffect(
    useCallback(() => {
    getClientes(setPros, setPros)
    buscarServicos(setServices)

    }, [])
  )


  return (

    <View style={homeStyles.container}>
      <ImageBackground source={require('../assets/logo.jpg')} style={homeStyles.backgroundImage}></ImageBackground>

      {!modalVisible && user.role === 0 &&

        <TouchableOpacity style={homeStyles.openButton} onPress={() => setModalVisible(true)}>
          <Icon name="bars" size={20} color="#000" />
        </TouchableOpacity>
      }

       {!modalVisible && user.role === 1 &&

        <TouchableOpacity style={homeStyles.openButton} onPress={() => navigation.navigate('MeusAgendamentosProfissional')}>
          <Icon name="calendar" size={20} color="#000" />
        </TouchableOpacity>
      }

      <Modals navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <View style={[homeStyles.containerInto, { marginTop: user.role !== 0 ? '20%' : '0%' }]}>
        <Text style={homeStyles.title}>Salão Braids</Text>
        <Text style={homeStyles.status}>Aberto</Text>
        <View style={homeStyles.search_container}>
          <TextInput onPress={() => navigation.navigate('ver profissional')} style={homeStyles.search} placeholder="Procurar profissionais" />

          <FlatList
            style={{ margin: 0, padding: 0, height: 8 }}
            data={pro}
            keyExtractor={(item) => item.id}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('verProfissional', { profissional: item })} style={homeStyles.prof_item}>
                <Image source={{ uri: item.foto ? `http:///194.210.91.225:4041/cliente/${item.foto}` :  `http:///194.210.91.225:4041/cliente/uploads/image.jpg  `}} style={homeStyles.circle} />
                <Text style={homeStyles.circleText}>{item.nome}</Text>
              </TouchableOpacity>

            )}
          />

          <FlatList
            style={{ margin: 0, padding: 0, height: 30 }}
            data={services}
            keyExtractor={(item) => item.id}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity  onPress={()=> navigation.navigate('verServico', {service:item})}style={homeStyles.prof_item}>
                <Image source={{ uri: item.imagem ? `http:///194.210.91.225:4041/cliente/${item.imagem}` :  `http:///194.210.91.225:4041/cliente/uploads/image.jpg  `}} style={homeStyles.circle} />

                
                <Text style={homeStyles.circleText}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <MapView style={homeStyles.map} initialRegion={{
          latitude: 41.8053,
          longitude: -6.7567,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
          <Marker coordinate={{ latitude: 41.8053, longitude: -6.7567 }} title="Salão Braids" />
        </MapView>

      </View>
    </View>
  )
}

export default Saloon