import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import CheckBox from '@react-native-community/checkbox';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import TextInputCustom from '../../components/Inputs';

const Register = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  // terms and condition link
  var linkOption = {
    // iOS Properties
    dismissButtonStyle: 'cancel',
    preferredBarTintColor: '#453AA4',
    preferredControlTintColor: 'white',
    readerMode: false,
    animated: true,
    modalPresentationStyle: 'fullScreen',
    modalTransitionStyle: 'coverVertical',
    modalEnabled: true,
    enableBarCollapsing: false,
    // Android Properties
    showTitle: true,
    toolbarColor: '#6200EE',
    secondaryToolbarColor: 'black',
    navigationBarColor: 'black',
    navigationBarDividerColor: 'white',
    enableUrlBarHiding: true,
    enableDefaultShare: true,
    forceCloseOnRedirection: false,
    // Specify full animation resource identifier(package:anim/name)
    // or only resource name(in case of animation bundled with app).
    animations: {
      startEnter: 'slide_in_right',
      startExit: 'slide_out_left',
      endEnter: 'slide_in_left',
      endExit: 'slide_out_right',
    },
    headers: {
      'my-custom-header': 'my custom header value',
    },
  };

  const handleClick = () => {
    InAppBrowser.open('https://www.taskplanet.org/termsconditions', linkOption);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.textStyle}>Let's Start to Earn #pro</Text>
        </View>
        {/* form body */}
        <View style={styles.bodyform}>
          {/* login field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Sponsor Id</Text>
            <TextInputCustom
              placeholder="Enter Your Sponsor Id"
              iconName="person"
              iconColor="red"
              name="sponsor"
              width="100%"
              value={''}
            />
          </View>
          {/* Sponsor field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Sponsor Name</Text>
            <TextInputCustom
              placeholder="Your sponsor name"
              iconName="person"
              iconColor="red"
              name="sponsor_name"
              width="100%"
              value={''}
            />
          </View>
          {/* full name field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Full Name</Text>
            <TextInputCustom
              placeholder="Enter your name"
              iconName="person"
              iconColor="red"
              name="sponsor_name"
              width="100%"
              value={''}
            />
          </View>
          {/* email field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Email</Text>
            <TextInputCustom
              placeholder="Enter your email"
              iconName="mail"
              iconColor="red"
              name="email"
              width="100%"
              value={''}
            />
          </View>
          {/* password field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Password</Text>
            <TextInputCustom
              placeholder="Enter Your Password"
              iconName="key"
              iconColor="red"
              name="password"
              width="100%"
              value={''}
              secureTextEntry={!isOpen}
              rightIcon={isOpen ? 'eye-outline' : 'eye-off-outline'}
            />
          </View>
          {/* password field */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInputCustom
              placeholder="Enter Your Confirm Password"
              iconName="key"
              iconColor="red"
              name="confirm_password"
              width="100%"
              value={''}
              secureTextEntry={!isOpen}
              rightIcon={isOpen ? 'eye-outline' : 'eye-off-outline'}
            />
          </View>
        </View>

        {/* aggre terms */}
        {/* <View style={styles.termsandcondition}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              flexWrap: 'wrap',
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              // onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.textStyle}>
              By clicking this for Sign Up, you are agreed to our
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.linkText, {marginLeft: 3}]}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <View style={styles.checkedBtn}>
          <CheckBox
            tintColors={{true: 'green', false: 'gray'}}
            disabled={false}
            value={checked}
            onValueChange={newValue => setChecked(newValue)}
          />
          <TouchableOpacity onPress={() => handleClick()}>
            <Text style={{color: 'gray', fontSize: 15, alignItems: 'center'}}>
              I agree to{' '}
              <Text style={{color: 'red'}}>terms and conditions</Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* submit button */}
        <View style={styles.submitBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnStyle}>Sign Up</Text>
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
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.linkText, {marginLeft: 3}]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

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
  termsandcondition: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  linkText: {
    color: 'red',
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
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    color: '#fff',
  },
  redirectRow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  checkedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', marginTop: 10
  },
  check: {
    color: '#000',
    borderColor: '#000',
  },
});

