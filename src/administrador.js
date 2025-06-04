import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Administrator</Text>
        <Text style={styles.salonName}>Salão Braids</Text>
        <Text style={styles.status}>Aberto</Text>

        <Text style={styles.sectionTitle}>Procurar profissionais</Text>
        <View style={styles.section}>
          <Text style={styles.item}>Salão</Text>
          <Text style={styles.item}>Séria</Text>
          <Text style={styles.item}>Raquel</Text>
          <Text style={styles.item}>Rachel</Text>
          <Text style={styles.item}>Miles</Text>
        </View>

        <Text style={styles.sectionTitle}>Twist</Text>
        <View style={styles.section}>
          <Text style={styles.item}>Oviedo</Text>
          <Text style={styles.item}>Tango curta</Text>
        </View>

        <Text style={styles.sectionTitle}>Groupe</Text>
        <View style={styles.section}>
          <Text style={styles.item}>Großhaus</Text>
          <Text style={styles.item}>Luxe de l’eau</Text>
          <Text style={styles.item}>Taux de la salle</Text>
          <Text style={styles.item}>Série de l’eau</Text>
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
    marginBottom: 8,
  },
  salonName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
    color: 'green',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default App;