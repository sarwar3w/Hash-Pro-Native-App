import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({name, bgColor,route, navigation, action}:any) => {
  return (
    <View style={styles.btnView}>
      <TouchableOpacity onPress={()=>navigation ? navigation?.navigate(route) : action && action()}>
        <LinearGradient
          colors={bgColor ? [bgColor, bgColor] : ['#fff', '#fff']}
          style={[
            styles.btn,
            {
              borderColor: bgColor ? '#fff' : '#F5C445',
              borderWidth: bgColor ? 0 : 1,
            },
          ]}>
          <Text style={[styles.btnText, {color: bgColor ? '#fff' : '#000'}]}>
            {name}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnView: {
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
