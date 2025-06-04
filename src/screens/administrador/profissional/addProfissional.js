import { useState } from "react"
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native"
import loginStyles from "../../../styles/login"
import fazerAdicaoProfissional from "../../../função/administrador/profissional/AddProfissional"



const AddProfissional = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const typeName = (text) => {
        setName(text)
        setError('')
    }

    const typeEmail = (text) => {
        setEmail(text)
        setError('')
    }

  
    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.containerImage}>
                <View style={loginStyles.containerImageBorder}>
                    <Image source={require("./../../../../assets/index.png")} style={loginStyles.profileImage} />
                </View>
                <View style={loginStyles.containerImageText}>
                    <Text style={loginStyles.title_1}>Salão Braids</Text>
                    <Text style={[loginStyles.title, {fontSize: 20}]}>Adicionar Profissional</Text>
                </View>
            </View>

            <View style={loginStyles.containerText}>
                <Text style={loginStyles.text}>Nome</Text>
                <TextInput value={name} onChangeText={(newText) => typeName(newText)} style={loginStyles.input} placeholder="Digite seu nome" />
                <Text style={loginStyles.text}>Email</Text>
                <TextInput value={email} onChangeText={(newText) => typeEmail(newText)} style={loginStyles.input} placeholder="Digite seu email" />
                <TouchableOpacity onPress={() => fazerAdicaoProfissional(name, email, setError, navigation)}style={loginStyles.btn}>
                    <Text style={loginStyles.contentTextButton}>Adicionar</Text>
                </TouchableOpacity>
                <Text style={loginStyles.textError}>{error}</Text>
            </View>
        </View>
    )


}

export default AddProfissional