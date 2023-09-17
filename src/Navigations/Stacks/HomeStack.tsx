import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeHeader from '../../components/HomeHeader';
import Home from '../../screens/Home/Home';
import StackPro from '../../screens/Home/StackPro';
import HeaderStacking from '../../components/HeaderStaking';

const Stack = createStackNavigator();

const HomeStack = ({navigation}:any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={navigation} name="#PRO-Network" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#B5853D',
          },
        }}
        component={Home}
      />
      <Stack.Screen
        name="Staking"
        options={{
          headerTitle: () => (
            <HeaderStacking navigation={navigation} name="Stacking" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#B5853D',
          },
        }}
        component={StackPro}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
