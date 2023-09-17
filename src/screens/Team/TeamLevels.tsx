import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CardLevelMembers from '../../components/CardLevelMembers';


const TeamLevels = ({navigation}:any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Level Details')}>
          <CardLevelMembers />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TeamLevels;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
  },
});
