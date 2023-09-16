import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

const HomeStack = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>HomeStack</Text>
      </View>
    </ScrollView>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
