import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para submeter a avaliação
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Avaliação</Text>
      <Text style={styles.subHeader}>Classificação</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5, 6].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <Text style={[styles.star, star <= rating && styles.selectedStar]}>✔</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subHeader}>Fazer um comentário</Text>
      <TextInput
        style={styles.commentInput}
        multiline
        placeholder="Escreva seu comentário aqui..."
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submeter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  star: {
    fontSize: 24,
    marginRight: 8,
    color: '#ccc',
  },
  selectedStar: {
    color: '#000',
  },
  commentInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  submitButton: {
    padding: 16,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;