import api_administrador from "../../../server/api_administrador"


const removerProfissional = async(profissionalId, navigation) =>{

    try{

        const response = await api_administrador.delete(`/delete/profissional/${profissionalId}`)

        if(response.status=== 200) {
            navigation.goBack()
        }
    }catch (error) {
        console.error("Erro ao remover profissional", error)
    }
}

export default removerProfissional