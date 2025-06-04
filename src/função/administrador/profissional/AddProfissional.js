import api_administrador from "../../../server/api_administrador"



// funcao que cria senha apartir de uma sequencia de carateres
const gerarSenha = (tamanho = 8)=> {
    const caracteres = 'ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz0123456789!@#$%^&*'
    let senha = ''
  // enquanto for menor que 8 ele vai pegar aleatoriamente as letras e adiciona a senha e no final retorna senha  
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[indiceAleatorio]
    }

    return senha
}

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


const fazerAdicaoProfissional = async (nome, email,  setErro, navigation) => {

    const senha = gerarSenha(8)

    const { valid, message } = validateInput(nome, email, senha)

    if (!valid) {
        setErro(message)
        return
    }



    try {

        const new_profissional = await api_administrador.post('/new_profissional', { nome, email, senha })
        
        if(new_profissional.status === 200){
            
            navigation.goBack()
        }

    } catch (error) {
        console.log(error)
        if (error.status === 401 || error.status === 404)
            setErro('Sem autorização para registar um profissional com esses dados')
        else
            setErro('Erro no register de profissional')
    }
}

export default fazerAdicaoProfissional