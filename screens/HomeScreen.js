import React from 'react';
import {StatusBar, ScrollView, SafeAreaView, View} from 'react-native';

import HeaderInput from '../components/HeaderInput';
import MemberInfo from '../components/MemberInfo';
import BtnTopUp from '../components/BtnTopUp';
import ServiceSection from '../components/ServiceSection';
import CardPromo from '../components/CardPromo';

export default () => {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#00c369" />
      <SafeAreaView>
        <ScrollView>
          <HeaderInput />
          <MemberInfo />
          <BtnTopUp />
          <ServiceSection />
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 20,
            }}>
            {[...new Array(10)].map((_, index) => {
              return <CardPromo key={index} until={index + 10} />;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
