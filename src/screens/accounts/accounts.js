import { useContext, useEffect, useState } from "react"
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native"
import * as ImagePicker from 'expo-image-picker'
import loginStyles from "../../styles/login"
import { AuthContext } from "../../context/AuthContext"
import alertLogout from "../../função/outras/fazerLogout"
import editarDados from "../../função/outras/editarDados"
import alertadeRemocaodeConta from "../../função/outras/apagarConta"
import pickImage from "../../função/outras/carregarGaleria"



const MinhaConta = ({ navigation }) => {

    const { user, setUser } = useContext(AuthContext)

    const [usser, setUsser] = useState(user)
    const [nome, setNome] = useState(user.nome)
    const [image, setImage] = useState(`http://194.210.90.33:4041/cliente/${user.foto}`)
    const [nomeutilizador, setNomeUtilizador] = useState(user.nomeutilizador)
    const [isEditNome, setEditNome] = useState(false)
    const [isEditnomeutilizador, setEditNomeUtilizador] = useState(false)
    const [erro, setError] = useState('')


    useEffect(() => {
   
        (async () => {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Precisamos de permissão para acessar suas fotos!');
          }
        })();
      }, []);

    const digitarNome = (text) => {
        setNome(text)
        setError('')
    }

    const digitarNomeUtilizador = (text) => {
        setNomeUtilizador(text)
        setError('')
    }

    const trocarEditNome = async() => {


        if (isEditNome) {
            await editarDados(user, nome, 1, setError, setUser, setUsser)
            setEditNome(isEditNome)
        }

        setEditNome(!isEditNome)

    }



    const trocarEditNomeUtilizador = async() => {
        await editarDados(user, nomeutilizador, 2, setError, setUser, setUsser)

        setEditNomeUtilizador(!isEditnomeutilizador)

    }

    useEffect(()=> {
        setUsser(user)

    },[user])






    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.containerImage_1}>
                <TouchableOpacity onPress={ async()=> await pickImage(user,setImage)}style={loginStyles.containerImageBorder_1}>
                    <Image source={{ uri: image}} style={loginStyles.profileImage} />
                </TouchableOpacity>
                <View style={loginStyles.containerImageText_1}>
                    <Text style={loginStyles.title_1}>{usser.nome}</Text>
                    <Text style={loginStyles.title}>@{usser.nomeutilizador}</Text>
                </View>
            </View>

            <View style={loginStyles.containerText}>
                <Text style={loginStyles.text}>Nome</Text>
                <View style={loginStyles.d_flex}>
                    {
                        isEditNome ?
                            (
                                <TextInput value={nome} onChange={(newText) => digitarNome(newText.nativeEvent.text)} style={loginStyles.inputs} placeholder="Digite seu nome" />
                            )
                            :
                            (
                                <TouchableOpacity disabled={true} style={[loginStyles.inputs, { justifyContent: 'center' }]}>
                                    <Text>{nome}</Text>
                                </TouchableOpacity>
                            )
                    }

                    <TouchableOpacity onPress={trocarEditNome} style={loginStyles.btnEditOrSave}>
                        <Text>{isEditNome ? "salvar" : "editar"}</Text>
                    </TouchableOpacity>
                </View>



                <Text style={loginStyles.text}>Nome do utilizador</Text>
                <View style={loginStyles.d_flex}>
                    {
                        isEditnomeutilizador ?
                            (
                                <TextInput value={nomeutilizador} onChange={(newText) => digitarNomeUtilizador(newText.nativeEvent.text)} style={loginStyles.inputs} placeholder="Digite seu nome" />
                            )
                            :
                            (
                                <TouchableOpacity disabled={true} style={[loginStyles.inputs, { justifyContent: 'center' }]}>
                                    <Text>{nomeutilizador}</Text>
                                </TouchableOpacity>
                            )
                    }

                    <TouchableOpacity onPress={trocarEditNomeUtilizador} style={loginStyles.btnEditOrSave}>
                        <Text>{isEditnomeutilizador ? "salvar" : "editar"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={loginStyles.line}></View>
                <View style={loginStyles.d_flex}>
                    <TouchableOpacity onPress={() => alertLogout(navigation)} style={loginStyles.btnlogout}>
                        <Text>logout</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alertadeRemocaodeConta(user, navigation)} style={loginStyles.btndelete}>
                        <Text>remover conta</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )


}

export default MinhaConta