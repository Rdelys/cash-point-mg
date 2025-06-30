// SaisieJournalierPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Picker, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function SaisieJournalierPage({ route, navigation }) {
  const { operator, transactionType } = route.params;  // Récupère l'opérateur et le type de transaction

  const [formData, setFormData] = useState({
    date: '',
    clientName: '',
    phoneNumber: '',
    montant: '',
    commission: '',
    reference: '',
    transactionAmount: '',
    quantity: 1,
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    navigation.navigate('Dashboard', { operator }); // Retour au Dashboard après soumission
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{operator} - Saisie Journalier ({transactionType})</Text>

        {/* Si c'est Mobile Money */}
        {transactionType === 'Mobile Money' ? (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Date (automatique ou manuelle)"
              value={formData.date}
              onChangeText={(text) => handleChange('date', text)}
            />
            <Picker
              selectedValue={formData.transactionAmount}
              style={styles.picker}
              onValueChange={(itemValue) => handleChange('transactionAmount', itemValue)}
            >
              <Picker.Item label="Dépôt" value="depot" />
              <Picker.Item label="Retrait" value="retrait" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Nom du client (optionnel)"
              value={formData.clientName}
              onChangeText={(text) => handleChange('clientName', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Numéro de téléphone"
              value={formData.phoneNumber}
              onChangeText={(text) => handleChange('phoneNumber', text)}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Montant"
              value={formData.montant}
              onChangeText={(text) => handleChange('montant', text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Commission"
              value={formData.commission}
              onChangeText={(text) => handleChange('commission', text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Référence ou Code de transaction"
              value={formData.reference}
              onChangeText={(text) => handleChange('reference', text)}
            />
          </View>
        ) : (
          // Si c'est un Crédit
          <View style={styles.form}>
            <Picker
              selectedValue={formData.transactionAmount}
              style={styles.picker}
              onValueChange={(itemValue) => handleChange('transactionAmount', itemValue)}
            >
              <Picker.Item label="1000" value="1000" />
              <Picker.Item label="2000" value="2000" />
              <Picker.Item label="5000" value="5000" />
              <Picker.Item label="10000" value="10000" />
            </Picker>
            <Picker
              selectedValue={formData.quantity}
              style={styles.picker}
              onValueChange={(itemValue) => handleChange('quantity', itemValue)}
            >
              {[...Array(10)].map((_, index) => (
                <Picker.Item label={`${index + 1}`} value={index + 1} key={index} />
              ))}
            </Picker>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Soumettre</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 10, // Réduit la marge autour de l'écran
  },
  title: {
    fontSize: 18, // Réduit la taille du titre
    color: '#333',
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginBottom: 15, // Réduit l'espace entre le formulaire et le bouton
  },
  input: {
    width: '85%', // Réduit la largeur des champs
    paddingVertical: 8, // Réduit la hauteur des champs
    marginVertical: 6, // Réduit l'espacement entre les champs
    backgroundColor: '#fff',
    borderRadius: 6, // Réduit les coins arrondis
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14, // Réduit la taille de la police
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  picker: {
    width: '85%',
    paddingVertical: 8,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  button: {
    width: '85%', // Réduit la largeur du bouton
    paddingVertical: 12, // Réduit la hauteur du bouton
    marginVertical: 10, // Réduit l'espacement vertical
    backgroundColor: '#007BFF',
    borderRadius: 6, // Réduit les coins du bouton
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Réduit la taille du texte du bouton
  },
});
