import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Animatable.Text style={styles.title} animation="fadeInDown" duration={1500}>
        Bienvenue sur CashPointMG
      </Animatable.Text>

      <Animatable.Image
        source={require('../assets/logo.png')} // Remplace avec ton logo
        style={styles.logo}
        animation="bounceIn"
        duration={2000}
      />

      {/* Bouton Mobile Money */}
      <Animatable.View animation="fadeInUp" duration={1500}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#d3d8d1' }]}
          onPress={() => navigation.navigate('MobileMoney')} // Vérifie que la route "MobileMoney" est correcte
        >
          <Text style={styles.buttonText}>Mobile Money</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* Bouton Vente Crédit */}
      <Animatable.View animation="fadeInUp" duration={1500} delay={500}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#d3d8d1' }]}
          onPress={() => navigation.navigate('Credit')} // Vérifie que la route "Credit" est correcte
        >
          <Text style={styles.buttonText}>Vente Crédit</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d8d1',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
    borderRadius: 60,
    resizeMode: 'contain',
  },
  button: {
    width: '100%',
    maxWidth: 350,
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
