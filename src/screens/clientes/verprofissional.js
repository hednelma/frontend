
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ImageBackground, TouchableOpacity, FlatList, Text, View, Image } from 'react-native'
import { StyleSheet } from "react-native"
import buscarServicoProfissional from '../../função/visitante/cliente/buscarServicoProfissional'
import buscarAvaliacaoProfissional from '../../função/visitante/cliente/findAvaliacaoProfissional'




const VerProfissional = ({ navigation, route }) => {

  const profissional = route.params.profissional

  const [selectedServices, setSelectedServices] = useState(null)
  const [services, setServices] = useState([])

  const selectedAndUnSelectedServices = (service) => {
    setSelectedServices(service)
  }

  const [avaliacoes, setAvaliacoes] = useState([])

  function calcularRating(avaliacoes) {
    if (avaliacoes.length === 0) return 0;

    let soma = 0

    for (let avaliacao of avaliacoes) {
      soma += avaliacao.rating
    }
    const media = soma / avaliacoes.length;

    return media.toFixed(1);
  }


  useFocusEffect(
    useCallback(() => {
      buscarServicoProfissional(profissional.id, setServices)
      buscarAvaliacaoProfissional(profissional.id, setAvaliacoes)

    }, [])
  )
  // serve para calcular estrala
  const renderStars = (rating, size = 16) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Text key={i} style={[ratingStyles.star, { fontSize: size }]}>★</Text>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Text key={i} style={[ratingStyles.halfStar, { fontSize: size }]}>★</Text>
        );
      } else {
        stars.push(
          <Text key={i} style={[ratingStyles.emptyStar, { fontSize: size }]}>☆</Text>
        );
      }
    }
    return stars;
  }


  return (
    <View style={seeprofessionalStyles.container}>

      <ImageBackground source={{ uri: profissional?.foto ? `http:///194.210.90.33:4041/cliente/${profissional?.foto}` : `http:///194.210.90.33:4041/cliente/uploads/image.jpg  ` }} style={seeprofessionalStyles.backgroundImage}></ImageBackground>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={seeprofessionalStyles.btn}>
        <Icon name="arrow-left" size={20} style={seeprofessionalStyles.contentTextButton} />
      </TouchableOpacity>
      <View style={seeprofessionalStyles.container_2} >
        <Text style={seeprofessionalStyles.header}>{profissional.nome}</Text>

        {/* Seção de Rating */}
        <View style={[ratingStyles.ratingSection, { justifyContent: 'center', alignItems: 'center' }]}>
          <View style={ratingStyles.ratingHeader}>
            <View style={ratingStyles.starsContainer}>
              {renderStars(calcularRating(avaliacoes), 25)}
            </View>
            <Text style={ratingStyles.overallRatingText}>
              {calcularRating(avaliacoes)}  ({avaliacoes.length} avaliações)
            </Text>
          </View>

          <TouchableOpacity style={ratingStyles.viewAllButton} onPress={() => navigation.navigate('avaliacoes', { avaliacoes: avaliacoes })}
          >
            <Text style={ratingStyles.viewAllButtonText}>Ver as avaliações</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold' }}>Serviços</Text>
        <View>
          <FlatList
            data={services}
            renderItem={({ item }) => (
              <TouchableOpacity style={seeprofessionalStyles.item}>
                <View style={{ flexDirection: 'row', gap: 3 }}>
                  <Image source={{ uri: item.imagem ? `http:///194.210.90.33:4041/cliente/${item.imagem}` : `http:///194.210.90.33:4041/cliente/uploads/image.jpg  ` }} style={{ width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
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

const ratingStyles = {
  ratingSection: {
    backgroundColor: '#ffffff',
  },
  ratingHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  star: {
    color: '#f39c12',
    marginRight: 1,
  },
  halfStar: {
    color: '#f39c12',
    marginRight: 1,
  },
  emptyStar: {
    color: '#ecf0f1',
    marginRight: 1,
  },
  overallRatingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginRight: 5,
  },
  totalReviewsText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  viewAllButton: {
    backgroundColor: '#fbde88',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'center',
  },
  viewAllButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  recentReviewsSection: {
    backgroundColor: '#ffffff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  reviewItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f9fa',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  reviewStars: {
    flexDirection: 'row',
  },
  reviewDate: {
    fontSize: 12,
    color: '#95a5a6',
  },
  reviewComment: {
    fontSize: 14,
    color: '#2c3e50',
    lineHeight: 20,
    marginBottom: 4,
  },
  reviewAuthor: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
};

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