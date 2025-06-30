// DashboardPage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DashboardPage({ route, navigation }) {
  const { operator } = route.params;  // Récupère le nom de l'opérateur depuis les paramètres

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{operator} - Dashboard</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SaisieJournalier', { operator })}
      >
        <Text style={styles.buttonText}>Saisie Journalier</Text>
      </TouchableOpacity>

      {/* Ajouter d'autres boutons si nécessaire */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d8d1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
