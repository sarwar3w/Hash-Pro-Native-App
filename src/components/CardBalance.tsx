import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardBalance = ({data}:any) => {
  return (
    <View style={styles.cardBody}>
      <View style={styles.cardUpperBody}>
        <View>
          <Text style={[styles.textStyle, styles.titleText]}>{data?.name}</Text>
        </View>
        <View>
          <Text style={[styles.textStyle, styles.titleText]}>
            {data?.value}
          </Text>
        </View>
      </View>
      {data?.content && (
        <View style={styles.cardLowerBody}>
          <Text style={styles.textStyle}>{data?.content}</Text>
        </View>
      )}
    </View>
  );
};

export default CardBalance;

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardUpperBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
  },
  cardLowerBody: {
    paddingTop: 10,
  },
});
