import { useContext, useEffect } from "react"
import { View, Image, StyleSheet } from "react-native"
import { AuthContext } from "../../context/AuthContext"




const Splash = ( { navigation } ) => {

    const { isAuthenticated } = useContext(AuthContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace(isAuthenticated ? "Home" : "Login")
        }, 2000)

        return () => clearTimeout(timer)
    }, [isAuthenticated, navigation])

    return (
        <View style={styles.container}>
             <Image source={require("./../../../assets/splash-icon.png")} style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbde89',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        height: 200,
        width: 200
    }

})

export default Splash