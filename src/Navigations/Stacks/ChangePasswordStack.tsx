import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ChangePassword from '../../screens/Auth/ChangePassword';
import HeaderStacking from '../../components/HeaderStaking';

const Stack = createStackNavigator();

const ChangePasswordStack = ({navigation}:any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        options={{
          headerTitle: () => (
            <HeaderStacking navigation={navigation} name="Change Password" />
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
        component={ChangePassword}
      />
    </Stack.Navigator>
  )
}

export default ChangePasswordStack

const styles = StyleSheet.create({})