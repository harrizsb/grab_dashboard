import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {['IDR 11.270', '265 Points'].map((val, index) => {
        return (
          <View
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <View
              style={{
                borderRadius: 50,
                borderColor: '#d5d5d5',
                borderWidth: 3,
                width: 40,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text style={{color: '#552d84'}}>
                {index === 0 ? (
                  'ovo'
                ) : (
                  <CommunityIcon name="crown" size={18} color="#552d84" />
                )}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{val}</Text>
              <Icon name="chevron-right" size={18} color="#c7c7c7" />
            </View>
          </View>
        );
      })}
    </View>
  );
};
