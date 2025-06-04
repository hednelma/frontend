import { useState } from "react"
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native"
import loginStyles from "../../styles/login"


const Login = ( { navigation } ) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const typeUseName = (text) => {
        setUsername(text)
        setError('')
    }

    const typePassWord = (text) => {
        setPassword(text)
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
                    <Text style={loginStyles.title}>Login</Text>
                </View>
            </View>

            <View style={loginStyles.containerText}>
                <Text style={loginStyles.text}>Nome do utilizador</Text>
                <TextInput value={username} onChange={(newText) => typeUseName(newText.nativeEvent.text)} style={loginStyles.input} placeholder="Digite seu nome de utilizador" />
                <Text style={loginStyles.text}>Palavra-passe</Text>
                <TextInput secureTextEntry={true} value={password} onChange={(newText) => typePassWord(newText.nativeEvent.text)} style={loginStyles.input} placeholder="Digite a palavra-passe" />
                <Text style={loginStyles.otherText}>Não tens conta? <Text onPress={()=> navigation.replace('Register')} style={loginStyles.otherText_1}>Regista aqui</Text></Text>
                <TouchableOpacity onPress={() => doLogin(username, password, setError, setIsAuthenticated, setUser)} style={loginStyles.btn}>
                    <Text style={loginStyles.contentTextButton}>Login</Text>
                </TouchableOpacity>
                <Text style={loginStyles.textError}>{error}</Text>
            </View>
        </View>
    )
}

export default Login