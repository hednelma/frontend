import { StyleSheet } from "react-native"

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbde89',
        alignItems: 'center',
    },

    containerImage: {
        flex: 3,
        backgroundColor: '#fbde89',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        flexDirection: 'row',
    },

    containerImage_1: {
        flex: 4,
        backgroundColor: '#fbde89',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerImageBorder: {
        backgroundColor: 'white',
        alignItems: 'start',
        padding: 10,
        borderRadius: 100,
        marginTop: 'auto',
        alignSelf: 'flex-start'
    },

    containerImageBorder_1: {
        backgroundColor: 'white',
        alignItems: 'start',
        padding: 10,
        borderRadius: 100,
        marginTop: 'auto',
        alignSelf: 'center'
    },

    containerImageText: {
        alignItems: 'start',
        padding: 10,
        marginTop: 'auto',
        alignSelf: 'flex-start'
    },

    containerImageText_1: {
        alignItems: 'start',
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerText: {
        flex: 7,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'start',
        padding: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

    title: {
        fontSize: 30,
    },

    title_1: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    text: {
        fontSize: 20,
        color: '#fbde89',
        textAlign: 'left'
    },

    textError: {
        fontSize: 15,
        color: 'red',
        alignSelf: 'center'
    },

    input: {
        fontSize: 15,
        padding: 10,
        height: 50,
        width: '100%',
        borderColor: '#fbde89',
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 10
    },

    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginBottom: 1,
        alignSelf: 'flex-start'
    },

    btn: {
        width: '100%',
        height: 60,
        borderRadius: 50,
        backgroundColor: '#fbde89',
        marginBottom: 2,
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        alignSelf: 'center'
    },

    contentTextButton: {
        fontSize: 25,
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    otherText: {
        fontSize: 15,
        color: 'gray',
        alignSelf: 'center'
    },

    otherText_1: {
        fontSize: 15,
        color: '#fbde89',
        alignSelf: 'center',
        textDecorationLine: 'underline'
    },

    d_flex: {
        flexDirection: 'row',
        width: '100%'
    },

    inputs: {
        fontSize: 15,
        padding: 10,
        height: 50,
        width: '80%',
        borderColor: '#fbde89',
        borderWidth: 1,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginBottom: 10
    },

    btnEditOrSave: {
        height: 50,
        width: '20%',
        padding: 10,
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        backgroundColor: '#fbde89',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    line: {
        height:2,
        width: '100%',
        marginTop: 5,
        marginBottom: 10,
        borderColor: '#fbde89',
        borderWidth: 1
    },

    btnlogout: {
        height: 50,
        width: '50%',
        padding: 10,
        borderRadius: 50,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 2
    },

    btndelete: {
        height: 50,
        width: '50%',
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2
    },

})

export default loginStyles