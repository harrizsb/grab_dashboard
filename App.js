/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import PaymentScreen from './screens/PaymentScreen';
import InboxScreen from './screens/InboxScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createBottomTabNavigator();

const componentList = [
  {
    name: 'Home',
    component: () => HomeScreen,
  },
  {
    name: 'Activity',
    component: () => ActivityScreen,
  },
  {
    name: 'Payment',
    component: () => PaymentScreen,
  },
  {
    name: 'Inbox',
    component: () => InboxScreen,
  },
  {
    name: 'Account',
    component: () => AccountScreen,
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'ios-compass';
                break;

              case 'Activity':
                iconName = 'ios-paper';
                break;

              case 'Payment':
                iconName = 'ios-wallet';
                break;

              case 'Inbox':
                return <MaterialIcons name="inbox" size={size} color={color} />;

              default:
                iconName = 'ios-home';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#00c369',
          inactiveTintColor: '#ccc',
          keyboardHidesTabBar: true,
        }}>
        {componentList.map(({name, component}, index) => {
          return (
            <Tab.Screen
              key={index}
              name={name}
              component={component.call(this)}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
