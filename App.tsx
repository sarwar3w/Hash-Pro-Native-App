import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNaviogator from './src/Navigations/BottomNaviogator';
import AuthNavigator from './src/Navigations/AuthNavigator';
import ColorScheme from './src/utilities/ColorScheme';

const App = () => {
  const token = false;
  return (
    <>
      {token ? (
        <NavigationContainer>
          <StatusBar backgroundColor={`#F5C445`} barStyle={'light-content'} />
          <BottomNaviogator />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <StatusBar backgroundColor={`#F5C445`} barStyle={'light-content'} />
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
