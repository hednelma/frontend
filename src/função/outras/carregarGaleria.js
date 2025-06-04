import * as ImagePicker from 'expo-image-picker'
import api_cliente from '../../server/api_cliente';


const pickImage = async (user, setImage) => {
  try {
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.7,
      })

      if (!result.canceled && result.assets) {
          const formData = new FormData()
          const fileURL =  result.assets[0].uri
          const fileName = fileURL.split("/").pop()
          const ext = fileURL.split(".").pop()
          formData.append("photo", {
            uri: fileURL, // Caminho da imagem
            name: fileName,
            type: "image/" + ext
          })
          const responseApi = await api_cliente.put(`/edit/my/photo/${user.id}`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })

          setImage(result.assets[0].uri)
      }
  } catch (error) {
      console.log('Erro ao enviar imagem:', error.response?.data || error.message)
  }
}

export default pickImage