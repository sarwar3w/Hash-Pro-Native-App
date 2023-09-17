import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SwapStack from './Stacks/SwapStack';
import WalletStack from './Stacks/WalletStack';
import TeamStack from './Stacks/TeamStack';
import StatisticsStack from './Stacks/StatisticsStack';
import OIcon from 'react-native-vector-icons/Octicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import HomeStack from './Stacks/HomeStack';
const BottomNaviogator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <OIcon name="home" size={20} color={color} />
          ),
          tabBarActiveTintColor: '#F5C445',
          tabBarItemStyle: {paddingVertical: 5},
          headerShown: false,
        }}
        name="Home screen"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Swap',
          tabBarIcon: ({color}) => (
            <MIcon name="swap-calls" size={25} color={color} />
          ),
          tabBarActiveTintColor: '#F5C445',
          tabBarItemStyle: {paddingVertical: 5},
          headerShown: false,
        }}
        name="Swap screen"
        component={SwapStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color}) => (
            <IIcon name="wallet-outline" size={25} color={color} />
          ),
          tabBarActiveTintColor: '#F5C445',
          tabBarItemStyle: {paddingVertical: 5},
          headerShown: false,
        }}
        name="Wallet screen"
        component={WalletStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Team',
          tabBarIcon: ({color}) => (
            <IIcon name="people-outline" size={25} color={color} />
          ),
          tabBarActiveTintColor: '#F5C445',
          tabBarItemStyle: {paddingVertical: 5},
          headerShown: false,
        }}
        name="Team screen"
        component={TeamStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Statistics',
          tabBarIcon: ({color}) => (
            <IIcon name="stats-chart-outline" size={25} color={color} />
          ),
          tabBarActiveTintColor: '#F5C445',
          tabBarItemStyle: {paddingVertical: 5},
          headerShown: false,
        }}
        name="Statistics screen"
        component={StatisticsStack}
      />
    </Tab.Navigator>
  );
};

export default BottomNaviogator;

const styles = StyleSheet.create({});
