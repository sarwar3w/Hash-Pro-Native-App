import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Toast} from 'react-native-toast-message';

const Swap = ({navigation}) => {
  // system wallet
  const data = [];
  const TokenWalletData = [];
  const sendSwapData = [];
  // // my wallet
  // const {data: TokenWalletData, isLoading: isLoadingTokenWallet} =
  //   useGetTokenWalletQuery();
  // // post swap amount
  // const [sendSwapData, {data: swapData, isLoading, error}] =
  //   useSendSwapDataMutation();

  // currency
  const curr1 = ['USD'];
  const curr2 = ['TP Token'];

  const [usdValue, setUsdValue] = useState(1);
  const [tpTokenValue, setTpTokenValue] = useState(
    1 / data?.data?.tpToken_rate_in_dollar,
  );
  const [usdToTp, setUsdToTp] = useState(true);
  const [tpToUsd, setTpToUsd] = useState(false);

  // console.log("USD TO TP", usdToTp)
  // console.log("TP to USD", tpToUsd)
  // console.log("USD", usdValue)
  // console.log("TP", tpTokenValue)

  useEffect(() => {
    setTpTokenValue(1 / data?.data?.tpToken_rate_in_dollar);
  }, [data?.data]);

  // useEffect(() => {
  //   // console.log("SWAP DATA", swapData)
  //   // console.log("SWAP error", error)
  //   if (swapData) {
  //     Toast.show({
  //       type: 'success',
  //       text1: swapData?.message,
  //     });
  //   } else if (error) {
  //     Toast.show({
  //       type: 'error',
  //       text1: error?.data?.message,
  //     });
  //   }
  // }, [swapData, error]);

  const handleReverse = () => {
    setUsdToTp(!usdToTp);
    setTpToUsd(!tpToUsd);
  };

  const handleUsdAmount = usd => {
    setUsdValue(usd);
    setTpTokenValue(usd / data?.data?.tpToken_rate_in_dollar);
  };
  const handleTokenAmount = token => {
    setTpTokenValue(token);
    setUsdValue(token * data?.data?.tpToken_rate_in_dollar);
  };

  const handleSubmit = async () => {
    const data = {
      exchangeToken: tpTokenValue,
      exchangeDollar: usdValue,
      operation: usdToTp ? 'buy' : 'sell',
    };
    if (
      data?.operation === 'buy' &&
      (data?.exchangeDollar > TokenWalletData?.data?.total_dollar ||
        !TokenWalletData?.data?.total_dollar)
    ) {
      Toast.show({
        type: 'error',
        text1: 'Not Enough Balance',
      });
    } else if (
      data?.operation === 'sell' &&
      (data?.exchangeToken > TokenWalletData?.data?.total_amount ||
        !TokenWalletData?.data?.total_amount)
    ) {
      Toast.show({
        type: 'error',
        text1: 'Not Enough Balance',
      });
    } else {
      sendSwapData(data);
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.container}>
        <View style={[styles.reflink]}>
          <View style={styles.btnView}>
            <LinearGradient colors={['#F5C445', '#B5853D']} style={styles.btn}>
              <Text style={styles.btnText}>{`${
                '$' + (TokenWalletData?.data?.total_dollar || 0)?.toFixed(2)
              }`}</Text>
            </LinearGradient>
          </View>
          <View style={styles.btnView}>
            <LinearGradient colors={['#B5853D', '#F5C445']} style={styles.btn}>
              <Text style={styles.btnText}>
                TP token{' '}
                {`${
                  TokenWalletData?.data
                    ? TokenWalletData?.data?.total_amount?.toFixed(2)
                    : '0'
                }`}
              </Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.MyProfileForm}>
          <View
            style={[
              styles.fieldGroup,
              {
                width: '97%',
                backgroundColor: usdToTp ? '#F5C445' : '#B5853D',
                padding: 20,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
              },
            ]}>
            <Text style={{fontWeight: '500', color: '#fff'}}>Deduct</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.inputField}
                name="usd_value"
                width="50%"
                keyboardType="numeric"
                defaultValue={usdToTp ? `${usdValue}` : `${tpTokenValue}`}
                value={usdToTp ? usdValue : tpTokenValue}
                onChangeText={value =>
                  usdToTp ? handleUsdAmount(value) : handleTokenAmount(value)
                }
              />
              <SelectDropdown
                data={curr1}
                onSelect={(selectedItem, index) =>
                  console.log('method', selectedItem)
                }
                buttonTextAfterSelection={(item, index) => {
                  return item;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                defaultButtonText={usdToTp ? 'USD' : 'TP Tokem'}
                buttonStyle={{
                  borderRadius: 5,
                  width: '40%',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#eee',
                  padding: 0,
                  marginBottom: 0,
                }}
                buttonTextStyle={{
                  textAlign: 'left',
                  fontSize: 12,
                  color: 'gray',
                }}
                rowTextStyle={{
                  textAlign: 'left',
                  fontSize: 12,
                  // paddingHorizontal: 10,
                  paddingVertical: 0,
                }}
                rowStyle={{borderWidth: 0}}
                dropdownStyle={{
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  padding: 1,
                  backgroundColor: '#fff',
                  elevation: 5,
                  borderWidth: 1,
                  borderColor: '#ccc',
                }}
                dropdownOverlayColor={'rgba(255, 255, 255, 0)'}
                // renderDropdownIcon={isOpened => {
                //   return (
                //     <FontAwesome
                //       name={isOpened ? 'chevron-down' : 'chevron-up'}
                //       color={'#444'}
                //       size={18}
                //     />
                //   );
                // }}
                // dropdownIconPosition={'right'}
              />
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <TouchableOpacity onPress={handleReverse}>
              <Ionicons
                name="swap-vertical-sharp"
                style={{
                  color: '#fff',
                  borderRadius: 100,
                  backgroundColor: '#F5C445',
                  padding: 10,
                }}
                size={30}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.fieldGroup,
              {
                width: '97%',
                backgroundColor: tpToUsd ? '#F5C445' : '#B5853D',
                padding: 20,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
              },
            ]}>
            <Text style={{fontWeight: '500', color: '#fff'}}>Credit</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextInput
                style={styles.inputField}
                name="new_password"
                width="50%"
                editable={false}
                keyboardType="new-password"
                defaultValue={usdToTp ? `${tpTokenValue}` : `${usdValue}`}
                value={usdToTp ? tpTokenValue : usdValue}
                onChangeText={value =>
                  usdToTp ? handleTokenAmount(value) : handleUsdAmount(value)
                }
              />
              <SelectDropdown
                data={curr2}
                onSelect={(selectedItem, index) =>
                  console.log('method', selectedItem)
                }
                buttonTextAfterSelection={(item, index) => {
                  return item;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                defaultButtonText={tpToUsd ? 'USD' : 'TP Token'}
                buttonStyle={{
                  borderRadius: 5,
                  width: '40%',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#eee',
                  padding: 0,
                  marginBottom: 0,
                }}
                buttonTextStyle={{
                  textAlign: 'left',
                  fontSize: 12,
                  color: 'gray',
                }}
                rowTextStyle={{
                  textAlign: 'left',
                  fontSize: 12,
                  // paddingHorizontal: 10,
                  paddingVertical: 0,
                }}
                rowStyle={{borderWidth: 0}}
                dropdownStyle={{
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  padding: 1,
                  backgroundColor: '#fff',
                  elevation: 5,
                  borderWidth: 1,
                  borderColor: '#ccc',
                }}
                dropdownOverlayColor={'rgba(255, 255, 255, 0)'}
              />
            </View>
          </View>

          <View style={[styles.btnView, {marginVertical: 15}]}>
            <TouchableOpacity onPress={handleSubmit}>
              <LinearGradient
                colors={['#F5C445', '#B5853D']}
                style={styles.btn}>
                <Text style={styles.btnText}>
                  {/* {isLoading ? 'Loading' : usdToTp ? 'Buy' : 'Sell'} */}
                  swap
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Swap;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f9',
    height: '100%',
    padding: 15,
  },
  MyProfileForm: {
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    color: '#000',
  },
  subHeading: {
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    color: '#000',
  },
  flexInput: {
    flexDirection: 'row',
  },
  fieldGroup: {
    width: '47%',
    marginHorizontal: 5,
  },
  btnView: {
    marginVertical: 2,
  },
  reflink: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'column',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
  btn: {
    paddingVertical: 8,
    borderRadius: 5,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  checkedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 0,
    paddingVertical: 2,
    flex: 1,
  },
});
