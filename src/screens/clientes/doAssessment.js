import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, SafeAreaView, StatusBar } from 'react-native'
import doEvaluation from '../../função/visitante/cliente/doEvaluation';


const DoAssessment = ({ route }) => {

    const [rating, setRating] = useState(null)
    const [comment, setComment] = useState('')
    const clientId = route.params.clientId
    const professionalId = route.params.professionalId
    const serviceId = route.params.serviceId
    const [isSubmitted, setIsSubmitted] = useState(false)

    console.log("ProfessionalId: ", professionalId)
    console.log("ServiceId: ", serviceId)
    console.log( "ClientId: ", clientId)

    const submitAssessment = async() => {
        if (rating === null) {
            Alert.alert("Avaliação Incompleta", "Por favor, selecione uma pontuação antes de enviar.")
            return
        }
        else {
            await doEvaluation(clientId, professionalId, serviceId, rating, comment, setIsSubmitted)
        }

    }

    const resetAssessment = () => {
        setRating(null)
        setComment('')
        setIsSubmitted(false)
    }

    if (isSubmitted) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
                <View style={styles.completedContainer}>
                    <Text style={styles.completedTitle}>✅ Avaliação Enviada!</Text>
                    <Text style={styles.completedMessage}>
                        Obrigado pelo seu feedback valioso.
                    </Text>
                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={resetAssessment}
                    >
                        <Text style={styles.resetButtonText}>Nova Avaliação</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>Como foi sua experiência?</Text>
                    <Text style={styles.subtitle}>
                        Sua opinião é muito importante para nós
                    </Text>
                </View>

                <View style={styles.ratingSection}>
                    <Text style={styles.ratingLabel}>
                        Dê uma nota de 0 a 5:
                    </Text>

                    <View style={styles.ratingContainer}>
                        {[0, 1, 2, 3, 4, 5].map((score) => (
                            <TouchableOpacity
                                key={score}
                                style={[
                                    styles.ratingButton,
                                    rating === score && styles.selectedRating
                                ]}
                                onPress={() => setRating(score)}
                            >
                                <Text style={[
                                    styles.ratingText,
                                    rating === score && styles.selectedRatingText
                                ]}>
                                    {score}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {rating !== null && (
                        <Text style={styles.ratingDescription}>
                            {rating === 0 && "Muito insatisfeito"}
                            {rating === 1 && "Insatisfeito"}
                            {rating === 2 && "Pouco satisfeito"}
                            {rating === 3 && "Neutro"}
                            {rating === 4 && "Satisfeito"}
                            {rating === 5 && "Muito satisfeito"}
                        </Text>
                    )}
                </View>

                <View style={styles.commentSection}>
                    <Text style={styles.commentLabel}>
                        Deixe seu comentário:
                    </Text>
                    <TextInput
                        style={styles.commentInput}
                        multiline
                        numberOfLines={6}
                        placeholder="Conte-nos mais sobre sua experiência... (opcional)"
                        value={comment}
                        onChangeText={setComment}
                        textAlignVertical="top"
                        placeholderTextColor="#95a5a6"
                        blurOnSubmit={true}
                        returnKeyType="done"
                        onSubmitEditing={() => {
                            // Força o teclado a fechar quando pressionar "Done"
                        }}
                    />
                </View>

                <TouchableOpacity
                    style={[styles.submitButton, rating === null && styles.disabledButton]} onPress={submitAssessment} disabled={rating === null}>
                    <Text style={[styles.submitButtonText, rating === null && styles.disabledButtonText]}>Enviar Avaliação</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        padding: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#7f8c8d',
        textAlign: 'center',
        lineHeight: 22,
    },
    ratingSection: {
        marginHorizontal: 20,
        marginBottom: 40,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fbde88',
        padding: 25,
    },
    ratingLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 20,
        textAlign: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        marginBottom: 15,

    },
    ratingButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ecf0f1',
    },
    selectedRating: {
        backgroundColor: '#fbde88',
        borderColor: '#fbde88',
        transform: [{ scale: 1.3 }],
    },
    ratingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7f8c8d',
    },
    selectedRatingText: {
        color: '#ffffff',
    },
    ratingDescription: {
        fontSize: 16,
        color: '#3498db',
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 10,
    },
    commentSection: {
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fbde88',
        padding: 20
    },
    commentLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 15,
    },
    commentInput: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        color: '#2c3e50',
        borderWidth: 1,
        borderColor: '#ecf0f1',
        minHeight: 120,
        textAlignVertical: 'top',
    },
    submitButton: {
        marginHorizontal: 20,
        marginBottom: 30,
        backgroundColor: '#fbde88',
        paddingVertical: 18,
        borderRadius: 50,
    },
    disabledButton: {
        backgroundColor: '#bdc3c7',
        shadowOpacity: 0,
        elevation: 0,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    disabledButtonText: {
        color: '#95a5a6',
    },
    completedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    completedTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#27ae60',
        marginBottom: 20,
        textAlign: 'center',
    },
    completedMessage: {
        fontSize: 18,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 26,
    },
    resetButton: {
        backgroundColor: '#fbde88',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 50,
    },
    resetButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default DoAssessment;