import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IIcons from 'react-native-vector-icons/Ionicons';
import Card from '../../../components/Card';

const DepositWithdraw = () => {
  return (
    <View>
      <View>
        {/* buttons box */}
        <View style={styles.depositWithdrawButtonsRow}>
          <View style={styles.buttons}>
            <Text style={styles.btnIcon}>
              <IIcons name="arrow-down" size={25} color={'#ffffff'} />
            </Text>
            <Text style={styles.btnText}>Deposit</Text>
          </View>
          <View style={styles.buttons}>
            <Text style={styles.btnIcon}>
              <IIcons name="arrow-up" size={25} color={'#ffffff'} />
            </Text>
            <Text style={styles.btnText}>Withdraw</Text>
          </View>
        </View>
        {/* card body */}
        <ScrollView style={{marginHorizontal: 20}}>
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
};

export default DepositWithdraw;

const styles = StyleSheet.create({
  depositWithdrawButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttons: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIcon: {
    backgroundColor: '#ffe5a1',
    padding: 10,
    borderRadius: 100,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#a8a8a8',
  },
});
