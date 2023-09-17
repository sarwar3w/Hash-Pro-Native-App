import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View style={styles.cardBody}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 30, height: 30}}
          source={{
            uri: 'https://res.cloudinary.com/deavhufn6/image/upload/v1692778730/usdt_in8z9p.png',
          }}
        />
        <View style={{marginLeft: 5}}>
          <Text style={styles.textStyle}>0.0000</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textStyle}>#PRO</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  textStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
});
