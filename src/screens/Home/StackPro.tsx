import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TextInputCustom from '../../components/Inputs';
import LinearGradient from 'react-native-linear-gradient';

const StackPro = () => {
  return (
    <ScrollView>
      <View style={styles.stackingBody}>
        <View>
          <View style={styles.imageBox}>
            <Image
              style={{width: 80, height: 80}}
              source={{
                uri: 'https://res.cloudinary.com/deavhufn6/image/upload/v1693285352/valentine-card-gift_uilwc3.jpg',
              }}
            />
          </View>
          <View style={styles.balanceBody}>
            <Text style={styles.balanceValueText}> 0.00 #PRO</Text>
            <Text style={styles.balance}> Balance</Text>
          </View>
          <View style={styles.balanceInputBox}>
            <TextInputCustom
              placeholder="Enter #PRO amount"
              style={{textAlign: 'center'}}
            />
          </View>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity>
            <LinearGradient colors={['#B5853D', '#F5C445']} style={styles.btn}>
              <Text style={styles.btnText}>Stack Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default StackPro;

const styles = StyleSheet.create({
  stackingBody: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceBody: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  balanceValueText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  balance: {
    color: 'gray',
  },
  balanceInputBox: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnView: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  btn: {
    paddingVertical: 8,
    borderRadius: 5,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
