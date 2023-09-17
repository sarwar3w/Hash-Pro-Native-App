import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import TextInputCustom from '../../components/Inputs';

const Login = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.textStyle}>Let's Start to Earn #pro</Text>
        </View>
        {/* form body */}
        <View style={styles.bodyform}>
          {/* login field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Username or Email</Text>
            <TextInputCustom
              placeholder="Enter Your Username or Email"
              iconName="person"
              iconColor="#F5C445"
              name="mobile"
              width="100%"
              defaultValue={''}
            />
          </View>
          {/* password field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Password</Text>
            <TextInputCustom
              placeholder="Enter Your Password"
              iconName="key"
              iconColor="#F5C445"
              name="password"
              width="100%"
              defaultValue={''}
              secureTextEntry={!isOpen}
              rightIcon={isOpen ? 'eye-outline' : 'eye-off-outline'}
            />
          </View>
        </View>
        {/* forgot password */}
        <View style={styles.forgotPass}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Forgot Password')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* submit button */}
        <View style={styles.submitBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnStyle}>Sign In</Text>
          </TouchableOpacity>
        </View>

        {/* forgot password */}
        <View style={styles.redirectRow}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textStyle}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.linkText, {marginLeft: 3}]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

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
    fontWeight: '400',
    color: '#000',
  },
  textStyle: {
    fontSize: 16,
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
    marginTop: 10,
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
  redirectRow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 390,
  },
});
