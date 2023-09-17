import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import CardBalance from '../../components/CardBalance';

const Statistics = ({navigation}:any) => {
    const data = [
        {
          _id: 1,
          name: 'Your Stacking',
          value: '100#PRO',
          content: '',
        },
        {
          _id: 2,
          name: 'Reserve Pool',
          value: '0#PRO',
          content: '',
        },
        {
          _id: 3,
          name: 'BFIC Escrow',
          value: '$0',
          content: '',
        },
        {
          _id: 4,
          name: 'Available Rewards',
          value: '0#PRO',
          content:
            'This is the amount rewards that you can withdraw to your main wallet',
        },
        {
          _id: 5,
          name: 'Maximam Rewards',
          value: '500#PRO',
          content:
            'This is 5X multiple of yours stacked amount and including stacked rewards, direct rewards and team rewards.',
        },
      ];
  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={styles.UserCards}>
          {data?.map((d, i) => (
            <CardBalance data={d} key={i + 1} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonSection}>
        <Button
          route="Statement Details"
          bgColor={'#F5C445'}
          name={'Statement Details'}
          navigation={navigation}
        />
        <Button
          route={'Withdraw Rewards'}
          navigation={navigation}
          name={'Withdraw Rewards'}
        />
      </View>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      paddingTop: 20,
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    UserCards: {
      height: '80%',
    },
    membersStatSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      paddingTop: 10,
      height: 80,
    },
    dWrapper: {
      flex: 1,
    },
    buttonSection: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  });
