import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function CreditPage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choisissez un service de Vente Crédit</Text>

      <View style={styles.logosContainer}>
        {/* Mvola */}
        <TouchableOpacity onPress={() => navigation.navigate('CreditMvolaPage')}>
          <Image source={require('../assets/mvola.png')} style={styles.logo} />
        </TouchableOpacity>

        {/* Orange Money */}
        <TouchableOpacity onPress={() => navigation.navigate('CreditOrangePage')}>
          <Image source={require('../assets/orange_money.png')} style={styles.logo} />
        </TouchableOpacity>

        {/* Airtel Money */}
        <TouchableOpacity onPress={() => navigation.navigate('CreditAirtelPage')}>
          <Image source={require('../assets/airtel_money.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  logosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 10,
    resizeMode: 'contain',
  },
});
