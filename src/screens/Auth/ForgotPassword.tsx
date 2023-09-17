import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TextInputCustom from '../../components/Inputs';

const ForgotPassword = ({}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.title}>Forgot Password</Text>
        </View>
        {/* form body */}
        <View style={styles.bodyform}>
          {/* login field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Email</Text>
            <TextInputCustom
              placeholder="Enter Your Email"
              iconName="person"
              iconColor="#F5C445"
              name="mobile"
              width="100%"
              defaultValue={''}
            />
          </View>
        </View>

        {/* submit button */}
        <View style={styles.submitBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnStyle}>Send Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  loginHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#595959',
  },
  bodyform: {
    paddingTop: 10,
  },
  inputField: {
    marginTop: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 40,
  },
  btn: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: '#F5C445',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
