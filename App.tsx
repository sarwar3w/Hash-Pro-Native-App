import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <NavigationContainer>
          <StatusBar backgroundColor={'#00b029'} barStyle={'light-content'} />
          <View style={styles.container}>
            <Text>Test</Text>
          </View>
        </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
