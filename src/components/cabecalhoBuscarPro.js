import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


const BuscarPrficional = ({ route }) => ({
    title: '',
    headerTitle: '',
    headerRight: () => (
        <View style={styles.rightHeader}>
            <TextInput style={{ width: '100%', borderColor: '#fbde89', borderWidth: 1, borderRadius: 10 }} />
        </View>
    )
})

const styles = StyleSheet.create({
    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingEnd: 10
    }
})

export default BuscarPrficional