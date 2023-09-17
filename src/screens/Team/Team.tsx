import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Share from 'react-native-share';
import CardTeam from '../../components/CardTeam';
import CardWithValueAndLevel from '../../components/CardWithValueAndLevel';
import Button from '../../components/Button';

const TeamPage = ({navigation}:any) => {
  const shareLink = async () => {
    const shareOptions = {
      message: 'Refer link of corresponding user',
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error ==>', error);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={styles.UserCards}>
          <CardTeam />
          <View style={styles.membersStatSection}>
            <View style={[styles.dWrapper, {marginRight: 10}]}>
              <CardWithValueAndLevel value={0} label={'Total Team Members'} bgColor={'#F5C445'} />
            </View>
            <View style={[styles.dWrapper, {marginLeft: 10}]}>
              <CardWithValueAndLevel value={0} label={'Direct Members'} bgColor={'#F5C445'} />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonSection}>
        <Button action={shareLink} name={'Add Referrals'} bgColor={`#F5C445`} />
        <Button
          route="Team Levels"
          bgColor={'#F5C445'}
          name={'Team Levels'}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default TeamPage;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 20,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  UserCards: {
    height: '88%',
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

