import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import editarServico from './editarServico'
import carregarImagem from '../../../função/administrador/servico/carregarImagem'

const InformacaoServico = ({ route }) => {

    const [servico, setServico] = useState(null)

    // Estados para edição
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [duracao, setDuracao] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState(null)
    const [editando, setEditando] = useState(false)

    // Carrega serviço da rota e atualiza os campos
    useEffect(() => {
        if (route.params?.service) {
            const serv = route.params.service
            setServico(serv)
            setNome(serv.nome)
            setDescricao(serv.descricao)
            setDuracao(serv.duracao?.toString() || '')
            setPreco(serv.preco?.toString() || '')
            setImagem(`http:///194.210.89.81:4041/cliente/${ serv.imagem}`)
        }
    }, [route.params?.servico])

    return (
        <View style={estilos.container}>
            {!editando ? (
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
            ) : (
                <ScrollView style={{ width: '100%' }}>
                    <View style={estilos.conteudo}>
                        {/* Nome do serviço */}
                        <Text style={estilos.label}>Nome do serviço</Text>
                        <TextInput value={nome} onChangeText={setNome} style={estilos.input} />

                        {/* Descrição */}
                        <Text style={estilos.label}>Descrição</Text>
                        <TextInput value={descricao} multiline onChangeText={setDescricao} style={estilos.textArea} />

                        {/* Duração */}
                        <Text style={estilos.label}>Duração</Text>
                        <TextInput value={duracao} onChangeText={setDuracao} keyboardType="numeric" style={estilos.input} />

                        {/* Preço */}
                        <Text style={estilos.label}>Preço</Text>
                        <TextInput value={preco} onChangeText={setPreco} keyboardType="numeric" style={estilos.input} />

                        {/* Imagem do serviço */}
                        <Text style={estilos.label}>Imagem do serviço</Text>
                        <TouchableOpacity onPress={() => carregarImagem(setImagem)}>
                            <Image source={{ uri: imagem?.uri ? imagem.uri : imagem }} style={estilos.imagem} resizeMode="cover" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}

            <TouchableOpacity 
                onPress={() => editando ? editarServico(servico.id, nome, descricao, preco, duracao, imagem, setServico, setEditando) : setEditando(true)} 
                style={estilos.botaoEditar}
            >
                <Text style={estilos.textoBotao}>
                    {!editando ? 'Editar Informações' : 'Salvar'}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default InformacaoServico

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