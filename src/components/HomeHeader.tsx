import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IIcon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/EvilIcons';

const HomeHeader = ({navigation, name}) => {
  return (
    <View style={styles.headerWrapper}>
      <View>
        <View style={styles.headerSegment}>
          <View>
            <TouchableOpacity

            //   onPress={() => navigation.navigate('notification')}
            >
              <IIcon name="notifications" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerMiddle}>
            {/* <Image
              style={{width: 30, height: 30}}
              source={{
                uri: 'https://res.cloudinary.com/deavhufn6/image/upload/v1690996976/dream-power_byudms.png',
              }}
            /> */}
            <Text style={styles.logo}>{name}</Text>
          </View>
          <View>
            <TouchableOpacity

            //   onPress={() => navigation.navigate('notification')}
            >
              <EIcon name="navicon" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#F5C445',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerSegment: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerMiddle: {flexDirection: 'row', alignItems: 'center'},
  logo: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '400',
    fontSize: 16,
  },
});
