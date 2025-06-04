import { StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    containerInto: {
        flex: 1,
        padding: 10
    },

    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '55%'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '25%'
    },
    status: {
        fontSize: 14,
        color: 'green'
    },

    search: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        height: 50,
        borderRadius: 5,
        marginVertical: 10
    },

    circle: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3
    },

    prof_item: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    search_container: {
        backgroundColor: 'white',
        width: '100%',
        height: '40%',
        padding: 10,
        elevation: 5,
    },

    map: {
        backgroundColor: 'white',
        width: '100%',
        height: '37%',
        padding: 10,
        marginTop: 10,
        elevation: 5,
    },

    openButton: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop:35,
        marginStart: 10,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent:'center'
      },

})

export default homeStyles