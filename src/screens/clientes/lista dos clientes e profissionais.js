import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

const App = () => {
  const clientes = ['Maria', 'Carla', 'Sónia'];
  const profissionais = ['Kátia Sofía', 'Abcínia', 'Anyluse'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Lista dos clientes e profissionais</Text>

        <Text style={styles.sectionTitle}>Lista dos clientes</Text>
        <View style={styles.list}>
          {clientes.map((cliente, index) => (
            <Text key={index} style={styles.item}>{cliente}</Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Lista dos profissionais</Text>
        <View style={styles.list}>
          {profissionais.map((profissional, index) => (
            <Text key={index} style={styles.item}>{profissional}</Text>
          ))}
        </View>
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
    marginTop: 16,
    marginBottom: 8,
  },
  list: {
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default App;