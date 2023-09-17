import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardStatement = () => {
  return (
    <View style={styles.cardBody}>
      <View style={[styles.headerTitle, styles.flexRow]}>
        <Text style={styles.title}>Total Rewards</Text>
        <Text style={styles.title}>0 #PRO</Text>
      </View>
      <View style={styles.body}>
        <View style={[styles.bodyItem, styles.flexRow]}>
          <Text style={styles.textStyle}>Staking Rewards</Text>
          <Text style={styles.textStyle}>0 #PRO</Text>
        </View>
        <View style={[styles.bodyItem, styles.flexRow]}>
          <Text style={styles.textStyle}>Direct Rewards</Text>
          <Text style={styles.textStyle}>0 #PRO</Text>
        </View>
        <View style={[styles.bodyItem, styles.flexRow]}>
          <Text style={styles.textStyle}>Team Rewards</Text>
          <Text style={styles.textStyle}>0 #PRO</Text>
        </View>
      </View>
      <View style={[styles.footer, styles.flexRow]}>
        <Text style={styles.title}>Available for Withdrawl</Text>
        <Text style={styles.title}>0 #PRO</Text>
      </View>
    </View>
  );
};

export default CardStatement;

const styles = StyleSheet.create({
  cardBody: {
    backgroundColor: '#F5C445',
    padding: 10,
    borderRadius: 15,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  body: {
    paddingVertical: 20,
  },
  bodyItem: {
    paddingVertical: 5,
  },
  textStyle: {
    ontSize: 15,
    fontWeight: '400',
    color: '#fff',
  },
  footer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#fff',
  },
});
