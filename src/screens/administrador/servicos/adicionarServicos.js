import { useState } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ScrollView } from "react-native"
import loginStyles from "../../../styles/login"

import carregarImagem from "../../../função/administrador/servico/carregarImagem"
import adicionarServico from "../../../função/administrador/servico/adicionarServico"




const AdicionarServicos = ({ navigation}) => {



    const [nome, setUsername] = useState('')
    const [descricao, setDescricao] = useState('')
    const [duracao, setDuracao] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState(require('./../../../../assets/uploadImagem.jpg'))




    const [error, setError] = useState('')

    const typeNome = (text) => {
        setUsername(text)
        setError('')
    }

    const typeDuracao = (text) => {
        setDuracao(text)
        setError('')
    }

    const typePreco = (text) => {
        setPreco(text)
        setError('')
    }


    return (
        <View style={[loginStyles.containerText, { backgroundColor: '#fff' }]}>

            <ScrollView style={{ width: '100%' }}>

                <View style={[loginStyles.containerText, { backgroundColor: 'white' }]}>

                    <Text style={loginStyles.text}>Nome do serviço</Text>
                    <TextInput value={nome} onChangeText={(text) => typeNome(text)} style={loginStyles.input} placeholder="Digite seu nome do serviço" />
                    <Text style={loginStyles.text}>Descricao</Text>
                    <TextInput value={descricao} onChangeText={(text) => setDescricao(text)} style={loginStyles.input} placeholder="Digite a descrição do serviço" />
                    <Text style={loginStyles.text}>Duração</Text>
                    <TextInput value={duracao} onChangeText={(text) => typeDuracao(text)} style={loginStyles.input} placeholder="Digite a duração" />
                    <Text style={loginStyles.text}>Preço</Text>
                    <TextInput value={preco} onChangeText={(text) => typePreco(text)} style={loginStyles.input} placeholder="Digite a o preço" />
                    <Text style={loginStyles.text}>Carrege uma imagem</Text>
                    <TouchableOpacity onPress={() => carregarImagem(setImagem)} style={{ width: '100%', height: 200, alignItems: 'center' }}>
                        <Image source={imagem} style={{ width: '80%', height: '100%' }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => adicionarServico(nome, descricao, duracao, preco, imagem, navigation)} style={loginStyles.btn}>
                        <Text style={loginStyles.contentTextButton}>Adicionar</Text>
                    </TouchableOpacity>

                    <Text style={loginStyles.textError}>{error}</Text>
                </View>
            </ScrollView>

        </View>
    )
}

export default AdicionarServicos 