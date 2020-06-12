import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          borderColor: '#eee',
          borderWidth: 3,
          borderRadius: 10,
          padding: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: 'rgba(0,0,0, .4)', // IOS
        }}>
        <Ionicons name="ios-wallet" style={{marginRight: 5}} size={18} />
        <Text>Top Up - Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};
