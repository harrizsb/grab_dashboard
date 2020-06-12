import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ({until}) => {
  return (
    <View
      style={{
        width: 150,
        height: 150,
        borderColor: '#eee',
        borderWidth: 3,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
      }}>
      <Text style={{marginBottom: 10}}>Promosi</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name="ios-calendar" style={{marginRight: 5}} size={18} />
        <Text>Until {until} Jun.</Text>
      </View>
    </View>
  );
};
