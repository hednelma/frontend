import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

// Componente para mostrar estrelas com base na nota
const StarRating = ({ rating }) => {

    const maxStars = 5
    const stars = []

    for (let i = 1; i <= maxStars; i++) {
        if (i <= Math.floor(rating)) {
            stars.push('★')
        } else {
            stars.push('☆')
        }
    }

    return <Text style={styles.stars}>{stars.join(' ')}</Text>
}

const StarRatingTop = ({ rating }) => {

    const maxStars = 5
    const stars = []

    for (let i = 1; i <= maxStars; i++) {
        if (i <= Math.floor(rating)) {
            stars.push('★')
        } else {
            stars.push('☆')
        }
    }

    return <Text style={[styles.stars, { fontSize: 40 }]}>{stars.join(' ')}</Text>
}

// Tela principal
const AvaliacoesScreen = ({ route }) => {
    // Lista de avaliações (exemplo)
    const avaliacoes = route.params.avaliacoes

    // Calcula média
    const calcularMedia = () => {
        if (avaliacoes.length === 0) return 0;
        const soma = avaliacoes.reduce((acc, item) => acc + item.rating, 0);
        return (soma / avaliacoes.length).toFixed(1);
    };

const formatDate = (dateString) => {
    const date = new Date(dateString); // Converte a string para objeto Date
    return date.toLocaleDateString('pt-BR'); // Formato DD/MM/YYYY
};
    const media = calcularMedia();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Avaliações</Text>

            <View style={styles.mediaContainer}>
                <Text style={styles.mediaText}>{media}</Text>
                <StarRatingTop rating={parseFloat(media)} />
            </View>

            {/* Lista de avaliações */}
            <FlatList
                data={avaliacoes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.avaliacaoItem}>
                        <Text style={styles.usuario}>{item.client.nome}</Text>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={[styles.usuario, { color: 'gray'}]}>{item.comments}</Text>
                            <Text style={[styles.usuario, { alignSelf: 'flex-end'}]}>{formatDate(item.createdAt)}</Text>
                        </View>
                        <StarRating rating={item.rating} />
                    </View>
                )}
            />
        </View>
    );
};

export default AvaliacoesScreen;

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    mediaContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    mediaText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#333',
    },
    stars: {
        fontSize: 20,
        color: '#fbde88',
        marginTop: 5,
    },
    avaliacaoItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderColor:'#fbde88',
        borderWidth: 1,
    },
    usuario: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});