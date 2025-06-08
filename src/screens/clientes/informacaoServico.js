import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const InformacaoServicoClientes = ({ route }) => {

    const [servico, setServico] = useState(null)

    // Estados para edição
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [duracao, setDuracao] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState(null)
   
    // Carrega serviço da rota e atualiza os campos
    useEffect(() => {
        if (route.params?.service) {
            const serv = route.params.service
            setServico(serv)
            setNome(serv.nome)
            setDescricao(serv.descricao)
            setDuracao(serv.duracao?.toString() || '')
            setPreco(serv.preco?.toString() || '')
            setImagem(`http:///194.210.91.225:4041/cliente/${ serv.imagem}`)
        }
    }, [route.params?.servico])

    return (
        <View style={estilos.container}>
           <View style={estilos.conteudo}>
                    {/* Nome do serviço */}
                    <Text style={estilos.label}>Nome do serviço</Text>
                    <Text style={estilos.nomeServico}>{nome}</Text>

                    {/* Descrição */}
                    <Text style={estilos.label}>Descrição</Text>
                    <Text style={estilos.descricao}>{descricao}</Text>

                    {/* Duração */}
                    <Text style={estilos.label}>Duração</Text>
                    <Text style={estilos.info}>{duracao}min</Text>

                    {/* Preço */}
                    <Text style={estilos.label}>Preço</Text>
                    <Text style={estilos.info}>{preco}€</Text>

                    {/* Imagem do serviço */}
                    <Text style={estilos.label}>Imagem do serviço</Text>
                    <Image source={{ uri: imagem?.uri ? imagem.uri : imagem }} style={estilos.imagem} resizeMode="cover" />
                </View>
        </View>
    )
}

export default InformacaoServicoClientes

// Estilos em português
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    conteudo: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFB74D',
        marginBottom: 5,
    },
    nomeServico: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    imagem: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginBottom: 20,
    },
    input: {
        borderColor: '#fbde88',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        borderColor: '#fbde88',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        textAlignVertical: 'top',
    },
    botaoEditar: {
        backgroundColor: '#fbde88',
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 10,
        width: '90%',
        height: 60,
        justifyContent: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
    },
})