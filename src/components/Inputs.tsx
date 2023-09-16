//import liraries
import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const TextInputCustom = props => {
  const [isFocuse, setIsFocuse] = useState(false);
  return (
    <View style={[styles.container]}>
      <Icon
        name={props.iconName}
        size={18}
        color={props.iconColor}
        style={styles.icon}
      />
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="gray"
        onFocus={() => setIsFocuse(false)}
        onBlur={() => setIsFocuse(false)}
        style={[styles.inputField, props.style]}
        secureTextEntry={props.secureTextEntry}
        name={props.name}
        autoCapitalize="none"
        editable={props.editable}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        onChangeText={props.onChangeText}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        value={props.value}
        keyboardAppearance={props.keyboardAppearance}
      />
      <Icon
        name={props.rightIcon}
        size={22}
        color={'#ff1100'}
        style={styles.icon}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    marginVertical: 0,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  icon: {
    marginVertical: 0,
    borderRadius: 100
  },
  inputField: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '400',
    marginLeft: 0,
    paddingVertical: 2,
    flex: 1,
  },
});

//make this component available to the app
export default TextInputCustom;