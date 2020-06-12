import React, {useState, useEffect} from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ta = 'center';

export default () => {
  const [textAlign, setTextAlign] = useState(ta);

  useEffect(() => {}, [textAlign, setTextAlign]);

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#00c369',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon
        name="ios-qr-scanner"
        style={{
          marginRight: 0,
          backgroundColor: '#fff',
          padding: 9.2,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
        size={30}
      />
      <TextInput
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderRadius: 10,
          textAlign,
          paddingLeft: textAlign === 'left' ? 15 : 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        placeholder="Offers, food, and places to go"
        onFocus={() => {
          setTextAlign('left');
        }}
        onBlur={() => {
          setTextAlign(ta);
        }}
      />
    </View>
  );
};
