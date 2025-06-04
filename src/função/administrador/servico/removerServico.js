import api_administrador from "../../../server/api_administrador"
import buscarServicos from "./buscarServiço";

const removerServico = async (id, setServices)  =>{
    try{


        const response = await api_administrador.delete('/delete/servico/' + id)
        buscarServicos(setServices)

    }catch(erro){
        console.log(erro);
        
        

    }
}


export default removerServico