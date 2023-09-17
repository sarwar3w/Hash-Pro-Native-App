import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IIcons from 'react-native-vector-icons/Ionicons';

const CardLevelMembers = () => {
  return (
    <View style={styles.cardBody}>
      <View>
        <View>
          <Text style={styles.levelName}>Level 1</Text>
        </View>
        <View style={styles.bottomLeft}>
          <Image
            style={styles.imgStyle}
            source={{
              uri: 'https://w7.pngwing.com/pngs/171/153/png-transparent-teal-and-grey-illustration-computer-icons-scalable-graphics-business-team-icon-business-businessman-leader-blue-text-people.png',
            }}
          />
          <Text style={styles.valueText}>0</Text>
          <Image
            style={styles.imgStyle}
            source={{
              uri: 'https://w7.pngwing.com/pngs/171/153/png-transparent-teal-and-grey-illustration-computer-icons-scalable-graphics-business-team-icon-business-businessman-leader-blue-text-people.png',
            }}
          />
          <Text style={styles.valueText}>0</Text>
        </View>
      </View>
      <View>
        <IIcons name="chevron-forward" size={20} />
      </View>
    </View>
  );
};

export default CardLevelMembers;

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  levelName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  imgStyle: {
    width: 15,
    height: 15,
  },
  valueText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
    marginHorizontal: 10,
  },
});
