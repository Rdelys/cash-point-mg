import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MobileMoneyOrangePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orange - Mobile Money</Text>

      {/* Bouton Dashboard */}
     <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Dashboard', { operator: 'Orange' })}
>
  <Text style={styles.buttonText}>Dashboard</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('SaisieJournalier', { operator: 'Orange', transactionType: 'Mobile Money' })}
>
  <Text style={styles.buttonText}>Saisie Journalier</Text>
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
