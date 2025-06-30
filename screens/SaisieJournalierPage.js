// SaisieJournalierPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function SaisieJournalierPage({ route, navigation }) {
  const { operator } = route.params;  // Récupère le nom de l'opérateur depuis les paramètres
  const [montant, setMontant] = useState('');

  const handleSubmit = () => {
    console.log(`Saisie pour ${operator}: ${montant}`);
    navigation.navigate('Dashboard', { operator }); // Retourner au Dashboard
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{operator} - Saisie Journalier</Text>

      <TextInput
        style={styles.input}
        placeholder="Montant"
        value={montant}
        onChangeText={setMontant}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Soumettre</Text>
      </TouchableOpacity>
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
  input: {
    width: '80%',
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
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
