import api_administrador from "../../../server/api_administrador"
import buscarServicos from "./buscarServiço"


const adicionarServico = async (nome, descricao, duracao, preco, imagem, navigation) => {


    console.log("DADOS: ", nome, descricao, duracao, preco, imagem)

    try {

        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('descricao', descricao)
        formData.append('duracao', duracao)
        formData.append('preco', preco)
        formData.append('imagem', imagem)


        const response = await api_administrador.post("/add/servico", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })


      

        if (response && response.status === 200) {
            navigation.goBack()

        }

    } catch (erro) {
        console.error("Erro ao adicionar servico:", erro)
    }
}


export default adicionarServico