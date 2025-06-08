import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity, StyleSheet, FlatList, Text, View, TextInput, Image } from 'react-native'
import filtrarClientePorNome from '../../função/visitante/cliente/filtrarClientePorNome'
import buscarProfissional from '../../função/visitante/cliente/buscarProfissional'



const Item = ({ user, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('verProfissional', { profissional: user })} style={styles.item}>
    <Image source={{ uri: user.foto ? `http:///194.210.91.225:4041/cliente/${user.foto}` : `http:///194.210.91.225:4041/cliente/uploads/image.jpg  ` }} style={styles.image} />
    <Text style={styles.title}>{user.nome}</Text>
  </TouchableOpacity>
)

const Proficionais = ({ navigation }) => {
  const [profissionais, setProfissionais] = useState([])

  const [profissionaisFiltred, setProfissionaisFiltred] = useState([])


  useFocusEffect(
    useCallback(() => {
      buscarProfissional(setProfissionais, setProfissionaisFiltred)
    }, [])
  )





  const renderItem = ({ item }) => (
    <Item user={item} navigation={navigation} />
  )

  return (
    <View style={styles.container}>
      <View style={{ height: 80, width: '100%', padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', rowGap: 2 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
          <Icon name="arrow-left" size={20} style={styles.contentTextButton} />
        </TouchableOpacity>
        <TextInput onChangeText={(nome) => filtrarClientePorNome(nome, profissionais, setProfissionaisFiltred)} placeholder='bucar profissional pelo nome' style={{ width: '90%', borderColor: '#fbde89', borderWidth: 1, borderRadius: 10, fontSize: 20 }} />
      </View>
      <FlatList
        data={profissionaisFiltred}
        renderItem={(profissional) => renderItem(profissional, navigation)}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white'
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
  btn: {
    width: 40
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20, // Para imagens redondas
    marginRight: 16,
  },
})

export default Proficionais