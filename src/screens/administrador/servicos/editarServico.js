import api_administrador from "../../../server/api_administrador"



const editarServico = async (id, nome, descricao, duracao, preco, imagem, setServices, setIsEditing) => {


  

    try {

        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('descricao', descricao)
        formData.append('duracao', duracao)
        formData.append('preco', preco)
        formData.append('imagem', imagem)


        const response = await api_administrador.put("/edit/servico/"+id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })


      

        if (response && response.status === 200) {


            const service = response.data
            setServices(service)
            

        }

        setIsEditing(false)



    } catch (erro) {
        setIsEditing(false)
        console.error("Erro ao editar servico:", erro)
    }
}


export default editarServico
