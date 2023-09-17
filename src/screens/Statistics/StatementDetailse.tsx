import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CardStatement from '../../components/CardStatement';


const StatementDetails = () => {
  const [activeTab, setActiveTab] = useState('reward');
  return (
    <View>
      <View style={styles.tabBox}>
        <TouchableOpacity
          onPress={() => setActiveTab('reward')}
          style={[
            styles.tab,
            {borderBottomWidth: activeTab === 'reward' ? 3 : 0},
          ]}>
          <Text style={styles.textStyle}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('withdrawal')}
          style={[
            styles.tab,
            {borderBottomWidth: activeTab === 'withdrawal' ? 3 : 0},
          ]}>
          <Text style={styles.textStyle}>Withdrawals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('staking')}
          style={[
            styles.tab,
            {borderBottomWidth: activeTab === 'staking' ? 3 : 0},
          ]}>
          <Text style={styles.textStyle}>Staking</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statementCards}>
        {activeTab === 'reward' || activeTab === 'withdrawal' ? (
          <CardStatement />
        ) : (
          <View style={[styles.cardWrapper, styles.flexRow]}>
            <View>
              <Text style={styles.title}>2023-08-29</Text>
              <Text style={styles.textStyle}>Active</Text>
            </View>
            <View>
              <Text style={styles.title}>100.00 #PRO</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default StatementDetails;

const styles = StyleSheet.create({
  tabBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#F5C445',
    paddingVertical: 15,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
  },
  statementCards: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
