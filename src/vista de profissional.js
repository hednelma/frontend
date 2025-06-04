import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

const App = () => {
  const agendamentos = [
    { id: '1', servico: 'Goddes braids', data: 'Março03,2025', horario: '10:00-12:10' },
    { id: '2', servico: 'Dreads', data: 'Março03,2025', horario: '08:00-10:00' },
    { id: '3', servico: 'Tranças curtas', data: 'Março13,2025', horario: '10:30-11:00' },
    { id: '4', servico: 'Tranças corridas', data: 'Março15,2025', horario: '12:00-13:00' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Vista de profissional</Text>
        <Text style={styles.sectionTitle}>Meus agendamentos</Text>

        {agendamentos.map((agendamento) => (
          <View key={agendamento.id} style={styles.agendamentoItem}>
            <Text style={styles.servicoText}>{agendamento.servico}</Text>
            <Text style={styles.detalhesText}>{agendamento.data}</Text>
            <Text style={styles.detalhesText}>{agendamento.horario}</Text>
          </View>
        ))}
      </ScrollView>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  agendamentoItem: {
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  servicoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detalhesText: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;