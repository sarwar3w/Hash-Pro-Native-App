import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardWithValueAndLevel = ({value, label, bgColor, textColor}: any) => {
  return (
    <View
      style={[styles.cardBody, {backgroundColor: bgColor ? bgColor : '#F5C445'}]}>
      <Text style={[styles.valueText, {color: textColor ? textColor : '#fff'}]}>
        {value}
      </Text>
      <Text style={[styles.labelText, {color: textColor ? textColor : '#fff'}]}>
        {label}
      </Text>
    </View>
  );
};

export default CardWithValueAndLevel;

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  valueText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  labelText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
});
