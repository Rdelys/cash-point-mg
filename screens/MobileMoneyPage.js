import React from 'react';
import { ScrollView, Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native'; // Assurez-vous que 'View' est bien importé

export default function MobileMoneyPage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choisissez un service de Mobile Money</Text>

      <View style={styles.logosContainer}>
        {/* Mvola */}
        <TouchableOpacity onPress={() => navigation.navigate('MobileMoneyMvolaPage')}>
          <Image source={require('../assets/mvola.png')} style={styles.logo} />
        </TouchableOpacity>

        {/* Orange Money */}
        <TouchableOpacity onPress={() => navigation.navigate('MobileMoneyOrangePage')}>
          <Image source={require('../assets/orange_money.png')} style={styles.logo} />
        </TouchableOpacity>

        {/* Airtel Money */}
        <TouchableOpacity onPress={() => navigation.navigate('MobileMoneyAirtelPage')}>
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
