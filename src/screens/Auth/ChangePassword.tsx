import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import TextInputCustom from '../../components/Inputs';

const ChangePassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.title}>Change your Password</Text>
        </View>
        {/* form body */}
        <View style={styles.bodyform}>
          {/* Current Password */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Current Password</Text>
            <TextInputCustom
              placeholder="Enter Your Username or Email"
              iconName="lock-closed"
              iconColor="#F5C445"
              name="mobile"
              width="100%"
              defaultValue={''}
            />
          </View>
          {/* New password */}
          <View style={styles.inputField}>
            <Text style={styles.label}>New Password</Text>
            <TextInputCustom
              placeholder="Enter Your Password"
              iconName="lock-closed"
              iconColor="#F5C445"
              name="password"
              width="100%"
              defaultValue={''}
              secureTextEntry={!isOpen}
              rightIcon={isOpen ? 'eye-outline' : 'eye-off-outline'}
            />
          </View>
          {/* Retype New Password */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Retype New Password</Text>
            <TextInputCustom
              placeholder="Retype New Password"
              iconName="lock-closed"
              iconColor="#F5C445"
              name="password"
              width="100%"
              defaultValue={''}
              secureTextEntry={!isOpen}
              rightIcon={isOpen ? 'eye-outline' : 'eye-off-outline'}
            />
          </View>
        </View>

        {/* submit button */}
        <View style={styles.submitBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnStyle}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  loginHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 16,
    height: 'auto',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#595959',
  },
  bodyform: {
    height: 'auto',
    paddingTop: 10,
  },
  inputField: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  forgotPass: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  linkText: {
    color: '#F5C445',
    fontSize: 16,
    fontWeight: '500',
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 350,
    marginHorizontal: 40,
  },
  btn: {
    width: '100%',
    paddingHorizontal: 20,
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
