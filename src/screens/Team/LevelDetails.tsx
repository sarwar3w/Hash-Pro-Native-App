import {StyleSheet, View} from 'react-native';
import React from 'react';
import CardWithValueAndLevel from '../../components/CardWithValueAndLevel';


const LevelDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.membersStatSection}>
        <View style={[styles.dWrapper, {marginRight: 10}]}>
          <CardWithValueAndLevel value={0} label={'Total Team Members'} />
        </View>
        <View style={[styles.dWrapper, {marginLeft: 10}]}>
          <CardWithValueAndLevel value={0} label={'Direct Members'} />
        </View>
      </View>
      <View style={styles.membersStatSection}>
        <View style={[styles.dWrapper, {marginRight: 10}]}>
          <CardWithValueAndLevel value={0} label={'Total Team Members'} />
        </View>
        <View style={[styles.dWrapper, {marginLeft: 10}]}>
          <CardWithValueAndLevel value={0} label={'Direct Members'} />
        </View>
      </View>
    </View>
  );
};

export default LevelDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 5,
    height: '100%',
  },
  membersStatSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingTop: 0,
    height: 70,
  },
  dWrapper: {
    flex: 1,
  },
});
