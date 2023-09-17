import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IIcons from 'react-native-vector-icons/Ionicons';

const CardTeam = () => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardLeft}>
        <Text style={styles.userName}>Rohit Roy</Text>
        <View style={styles.userNumberBox}>
          <Text>
            <IIcons name="logo-whatsapp" size={15} color={'green'} />
          </Text>
          <Text style={styles.userNumber}>+880 130 316 4150</Text>
        </View>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.teamLine}>Up-Line</Text>
        <Text style={styles.userId}>User Id: BZ4ZT0</Text>
      </View>
    </View>
  );
};

export default CardTeam;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardLeft: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    textTransform: 'uppercase',
  },
  userNumberBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNumber: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    textTransform: 'uppercase',
    marginLeft: 5,
  },
  cardRight: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  teamLine: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
  },
  userId: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    textTransform: 'uppercase',
    marginLeft: 5,
  },
});
