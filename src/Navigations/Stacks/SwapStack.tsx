import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Swap from '../../screens/Swap/Swap';

const Stack = createStackNavigator();

const SwapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Swap"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#B5853D',
            borderBottomWidth: 1,
            borderBottomColor: '#F5C445',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
            textAlign: 'center',
            fontSize: 15,
          },
          headerTitleAlign: 'center',
          headerBackTitleStyle: {
            fontSize: 20},
        }}
        component={Swap}
      />
    </Stack.Navigator>
  );
};

export default SwapStack;
