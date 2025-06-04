import { useState } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ScrollView } from "react-native"
import loginStyles from "../../styles/login"


const Register = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const typeName = (text) => {
        setName(text)
        setError('')
    }

    const typeEmail = (text) => {
        setEmail(text)
        setError('')
    }

    const typePassWord = (text) => {
        setPassword(text)
        setError('')
    }

    const typeConfirmPassWord = (text) => {
        setConfirmPassword(text)
        setError('')
    }

    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.containerImage}>
                <View style={loginStyles.containerImageBorder}>
                    <Image source={require("./../../../assets/index.png")} style={loginStyles.profileImage} />
                </View>
                <View style={loginStyles.containerImageText}>
                    <Text style={loginStyles.title_1}>Salão Braids</Text>
                    <Text style={loginStyles.title}>Registo</Text>
                </View>
            </View>

            <View style={loginStyles.containerText}>
                <Text style={loginStyles.text}>Nome</Text>
                <TextInput value={name} onChange={(newText) => typeName(newText.nativeEvent.text)} style={loginStyles.input} placeholder="Digite seu nome" />
                <Text style={loginStyles.text}>Email</Text>
                <TextInput value={email} onChange={(newText) => typeEmail(newText.nativeEvent.text)} style={loginStyles.input} placeholder="Digite seu email" />
                <Text style={loginStyles.text}>Palavra-passe</Text>
                <TextInput secureTextEntry={true} value={password} onChange={(newText) => typePassWord(newText.nativeEvent.text)} style={loginStyles.input} placeholder="Digite a palavra-passe" />
                <Text style={loginStyles.text}>Confirmação da palavra-passe</Text>
                <TextInput secureTextEntry={true} value={confirmPassword} onChange={(newText) => typeConfirmPassWord(newText.nativeEvent.text)} style={loginStyles.input} placeholder="Confirma a palavra-passe" />
                <Text style={loginStyles.otherText}>Já tens conta? <Text onPress={() => navigation.replace('Login')} style={loginStyles.otherText_1}>Clica aqui!</Text></Text>
                <TouchableOpacity style={loginStyles.btn}>
                    <Text style={loginStyles.contentTextButton}>Registar</Text>
                </TouchableOpacity>
                <Text style={loginStyles.textError}>{error}</Text>
            </View>
        </View>
    )


}

export default Register