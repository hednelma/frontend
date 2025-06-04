import * as ImagePicker from 'expo-image-picker'


const carregarImagem= async (setImage) => {
    
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.7,
        })

        if (!result.canceled && result.assets) {
            
            const fileURL =  result.assets[0].uri
            const fileName = fileURL.split("/").pop()
            const ext = fileURL.split(".").pop()
          
            setImage({
              uri: fileURL,
              name: fileName,
              type: "image/" + ext
            })
        }
    } catch (error) {
        console.log('Erro ao enviar imagem:', error.response?.data || error.message)
    }
}

export default carregarImagem