import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Reegister from '../screens/Auth/Reegister';
import ForgotPassword from '../screens/Auth/ForgotPassword';

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerShown: false,
        }}
        component={Reegister}
      />
      <Stack.Screen
        name="Forgot Password"
        options={{
          headerShown: false,
        }}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
