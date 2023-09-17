import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeHeader from '../../components/HomeHeader';
import Team from '../../screens/Team/Team';
import TeamLevels from '../../screens/Team/TeamLevels';
import LevelDetails from '../../screens/Team/LevelDetails';

const Stack = createStackNavigator();

const TeamStack = ({navigation}:any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Team"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={navigation} name="Your Team" />
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
        component={Team}
      />
      <Stack.Screen
        name="Team Levels"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={navigation} name="Team Levels" />
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
        component={TeamLevels}
      />
      <Stack.Screen
        name="Level Details"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={navigation} name="Level Details" />
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
        component={LevelDetails}
      />
    </Stack.Navigator>
  );
};

export default TeamStack;
