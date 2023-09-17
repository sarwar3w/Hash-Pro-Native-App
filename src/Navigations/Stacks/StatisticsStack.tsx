import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeHeader from '../../components/HomeHeader';
import Statistics from '../../screens/Statistics/Statistics';
import HeaderStacking from '../../components/HeaderStaking';
import WithdrawReward from '../../screens/Statistics/WithdrawReward';
import StatementDetailse from '../../screens/Statistics/StatementDetailse';


const Stack = createStackNavigator();

const StatisticsStack = ({navigation}:any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Statitics"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={navigation} name="Statistics" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#F5C445',
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
          headerBackTitleStyle: {fontSize: 15},
        }}
        component={Statistics}
      />
      <Stack.Screen
        name="Withdraw Rewards"
        options={{
          headerTitle: () => (
            <HeaderStacking navigation={navigation} name="Withdraw Rewards" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#F5C445',
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
          headerBackTitleStyle: {fontSize: 15},
        }}
        component={WithdrawReward}
      />
      <Stack.Screen
        name="Statement Details"
        options={{
          headerTitle: () => (
            <HeaderStacking navigation={navigation} name="Statement Details" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#F5C445',
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
          headerBackTitleStyle: {fontSize: 15},
        }}
        component={StatementDetailse}
      />
    </Stack.Navigator>
  );
};

export default StatisticsStack;

const styles = StyleSheet.create({});
