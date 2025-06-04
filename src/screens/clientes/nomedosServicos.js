import React from 'react';
import {  StyleSheet, Text, View, ScrollView } from 'react-native';

const VerProfissional = () => {
  const servicos = [
    { nome: 'Coddos braids', preco: '€30' },
    { nome: 'Dreads', preco: '€25' },
    { nome: 'Tranças curtas', preco: '€40' },
    { nome: 'Tranças corridas', preco: '€45' },
  ];

  return (
  <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Serviços</Text>


        {servicos.map((servico, index) => (
          <View key={index} style={styles.servicoItem}>
            <Text style={styles.servicoNome}>{servico.nome}</Text>
            <Text style={styles.servicoPreco}>{servico.preco}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 16,
  },
  servicoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  servicoNome: {
    fontSize: 16,
  },
  servicoPreco: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerProfissional;