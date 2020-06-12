import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

export default () => {
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <View
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {[
          'Food',
          'Mart',
          'Delivery',
          'Health',
          'Car',
          'Groceries',
          'Pulsa',
          'More',
        ].map((val, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '20%',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 10,
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: '#c3f0da',
                }}
              />
              <Text
                style={{
                  marginTop: 5,
                }}>
                {val}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
