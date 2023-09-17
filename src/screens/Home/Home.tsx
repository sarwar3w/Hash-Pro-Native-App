import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import IIcons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}:any) => {
  const [footerOn, setFooterOn] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.homepageUpperBody}>
          <View style={styles.upperBodyWrapper}>
            {/* left side */}
            <View>
              <View style={styles.innerCol}>
                <Text style={styles.valueText}>100 #PRO</Text>
                <Text style={styles.textStyle}>My Staking</Text>
              </View>
              <View style={styles.innerCol}>
                <Text style={styles.valueText}>0</Text>
                <Text style={styles.textStyle}>My Team</Text>
              </View>
              <View style={styles.innerCol}>
                <Text style={styles.valueText}>1.00 #PRO</Text>
                <Text style={styles.textStyle}>My Rewards</Text>
              </View>
            </View>
            {/* middle side */}
            <View>
              <Image
                style={{width: 100, height: 100}}
                source={{
                  uri: 'https://png.pngtree.com/png-clipart/20201229/ourmid/pngtree-heart-clipart-black-and-white-png-image_2649040.jpg',
                }}
              />
            </View>
            {/* right side */}
            <View>
              <View style={[styles.innerCol, styles.innerColRight]}>
                <Text style={styles.valueText}>100 #PRO</Text>
                <Text style={styles.textStyle}>Staking Rewards</Text>
              </View>
              <View style={[styles.innerCol, styles.innerColRight]}>
                <Text style={styles.valueText}>0.00 #PRO</Text>
                <Text style={styles.textStyle}>Direct Rewards</Text>
              </View>
              <View style={[styles.innerCol, styles.innerColRight]}>
                <Text style={styles.valueText}>0.00 #PRO</Text>
                <Text style={styles.textStyle}>Team Rewards</Text>
              </View>
            </View>
          </View>

          {/* upper fooer */}
          <View style={styles.footer}>
            {footerOn && (
              <View>
                <View style={styles.upperFooter}>
                  <View>
                    <Text style={styles.headerTitle}>Global Stats</Text>
                  </View>
                  <View>
                    <View style={[styles.innerCol, {alignItems: 'center'}]}>
                      <Text style={styles.valueText}>15640033</Text>
                      <Text style={styles.textStyle}>Total Participants</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={[
                        styles.innerCol,
                        {alignItems: 'center', marginVertical: 0},
                      ]}>
                      <Text style={styles.valueText}>205</Text>
                      <Text style={styles.textStyle}>Countries</Text>
                    </View>
                  </View>
                </View>
                {/* cards */}
                <View>
                  <View style={[styles.bgcard, styles.card]}>
                    <View style={styles.innerCol}>
                      <Text style={styles.valueText}>10695495630 #PRO</Text>
                      <Text style={styles.textStyle}>
                        Total Stacked in Pool
                      </Text>
                    </View>
                    <View style={[styles.innerCol, styles.innerColRight]}>
                      <Text style={styles.valueText}>$734696874</Text>
                      <Text style={styles.textStyle}>
                        Total Stacked in Pool (USD)
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.card]}>
                    <View style={styles.innerCol}>
                      <Text style={styles.valueText}>10695495630 #PRO</Text>
                      <Text style={styles.textStyle}>Total Rewards</Text>
                    </View>
                    <View style={[styles.innerCol, styles.innerColRight]}>
                      <Text style={styles.valueText}>$734696874</Text>
                      <Text style={styles.textStyle}>Total Rewards (USD)</Text>
                    </View>
                  </View>
                  <View style={[styles.bgcard, styles.card]}>
                    <View style={styles.innerCol}>
                      <Text style={styles.valueText}>10695495630 #PRO</Text>
                      <Text style={styles.textStyle}>Total Withdrawals</Text>
                    </View>
                    <View style={[styles.innerCol, styles.innerColRight]}>
                      <Text style={styles.valueText}>$734696874</Text>
                      <Text style={styles.textStyle}>
                        Total Withdrawals (USD)
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <TouchableOpacity onPress={() => setFooterOn(!footerOn)}>
                <Text>
                  <IIcons
                    name={footerOn ? 'chevron-up' : 'chevron-down'}
                    size={40}
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.mainBodyWrapper}>
          <View style={styles.refStakCard}>
            <TouchableOpacity>
              <View style={styles.linkAlign}>
                <Text style={[styles.linksStyle, {marginRight: 5}]}>
                  <IIcons name="person-add" size={12} />
                </Text>
                <Text style={styles.linksStyle}>Add Referral</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Staking')}>
              <View style={styles.linkAlign}>
                <Text style={[styles.linksStyle, {marginRight: 5}]}>
                  <IIcons name="heart-sharp" size={12} />
                </Text>
                <Text style={styles.linksStyle}>Stack #PRO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.timeLeftCard}>
            <Text style={styles.time}>17 h: 32 m: 34 s</Text>
            <Text style={styles.timeLeft}>Time Left</Text>
          </View>
          <View>
            <Image
              style={{width: '100%', height: 400}}
              source={{
                uri: 'https://media.istockphoto.com/id/1297275652/vector/valentines-day-banner-for-greeting-cards-wedding-invitation-gift-packages-heart-flying-frame.jpg?s=1024x1024&w=is&k=20&c=u4l7DkN88f6S3RqLmH4U0wVSSiCd0RNfkdE0FviWbgk=',
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  homepageUpperBody: {
    width: '100%',
    backgroundColor: '#F5C445',
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  upperBodyWrapper: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  innerCol: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  innerColRight: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  valueText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
  footer: {
    marginHorizontal: 25,
  },
  upperFooter: {
    paddingVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  bgcard: {
    backgroundColor: '#B5853D',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  mainBodyWrapper: {
    width: '100%',
    backgroundColor: '#fff',
  },
  refStakCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingTop: 10,
  },
  linksStyle: {
    fontSize: 13,
    color: '#F5C445',
    fontWeight: '600',
    alignItems: 'center',
  },
  linkAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeLeftCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 15,
    fontWeight: '600',
    color: '#505050',
  },
  timeLeft: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ccc',
  },
});
