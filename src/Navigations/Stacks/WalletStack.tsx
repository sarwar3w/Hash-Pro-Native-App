import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Wallet from '../../screens/Wallet/Wallet';
const Stack = createStackNavigator();
const WalletStack = ({navigation}:any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={navigation} name="Your Wallet" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#B5853D',
            borderBottomWidth: 1,
            borderBottomColor: '#B5853D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
            textAlign: 'center',
            fontSize: 15,
          },
          headerTitleAlign: 'center',
          headerBackTitleStyle: {fontSize: 15},
        }}
        component={Wallet}
      />
    </Stack.Navigator>
  );
};

export default WalletStack;
