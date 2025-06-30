import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import des pages
import HomePage from './screens/HomePage';
import MobileMoneyMvolaPage from './screens/MobileMoneyMvolaPage';
import MobileMoneyOrangePage from './screens/MobileMoneyOrangePage';
import MobileMoneyAirtelPage from './screens/MobileMoneyAirtelPage';
import CreditMvolaPage from './screens/CreditMvolaPage';
import CreditOrangePage from './screens/CreditOrangePage';
import CreditAirtelPage from './screens/CreditAirtelPage';
import MobileMoneyPage from './screens/MobileMoneyPage';
import CreditPage from './screens/CreditPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Page d'accueil */}
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        
        <Stack.Screen name="MobileMoney" component={MobileMoneyPage} />
        <Stack.Screen name="Credit" component={CreditPage} />
        
        {/* Pages Mobile Money */}
        <Stack.Screen name="MobileMoneyMvolaPage" component={MobileMoneyMvolaPage} />
        <Stack.Screen name="MobileMoneyOrangePage" component={MobileMoneyOrangePage} />
        <Stack.Screen name="MobileMoneyAirtelPage" component={MobileMoneyAirtelPage} />
        
        {/* Pages Vente Crédit */}
        <Stack.Screen name="CreditMvolaPage" component={CreditMvolaPage} />
        <Stack.Screen name="CreditOrangePage" component={CreditOrangePage} />
        <Stack.Screen name="CreditAirtelPage" component={CreditAirtelPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
