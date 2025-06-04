import api_visitante from "../../server/api_visitante"
import doLogin from "./fazerlogin"



const validateInput = (nome, email, senha) => {
    if (!nome || nome.trim() === '') {
        return { valid: false, message: "O nome inválido" }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
        return { valid: false, message: "Email inválido." }
    }

    if (!senha || senha.trim() === '') {
        return { valid: false, message: "A senha invalida" }
    }

    return { valid: true, message: "Input válido" }
}


const doRegister = async (nome, email, senha, senha2, setErro, navigation,setIsAuthenticated, setUser) => {

    const { valid, message } = validateInput(nome, email, senha)

    if (!valid) {
        setErro(message)
        return
    }

    if (senha !== senha2) {
        setErro("As palavras-passe não coincidem")
        return
    }

    try {

        const register = await api_visitante.post('/register', { nome, email, senha })
        
        if(register.status === 200){
            doLogin(register.data.nomeutilizador, senha, setErro,navigation,setIsAuthenticated, setUser)
        }

    } catch (error) {
        console.log(error)
        if (error.status === 401 || error.status === 404)
            setErro('Sem autorização para registar com esses dados')
        else
            setErro('Erro no register')
    }
}

export default doRegister