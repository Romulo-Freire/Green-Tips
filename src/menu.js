import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Account from './pages/Account';
import Locals from './pages/Locals';
import Videos from './pages/Videos';

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer
        independent={true}
    >
      <Tab.Navigator
        initialRouteName={'Locais'}
        backBehavior={'history'}
        tabBarOptions={{
          activeTintColor: '#8ef19a',
          allowFontScaling: true,
          style: { height: 60 },
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen
          name='Locais' 
          component={Locals} 
          options={{tabBarIcon:  ({ color, size }) => {
            let iconName='find';
            return <Icon name={iconName} size={size} color={color} />;
          }}}
          />
        <Tab.Screen
          name='Videos' 
          component={Videos}
          options={{tabBarIcon:  ({ color, size }) => {
            let iconName='play';
            return <Icon name={iconName} size={size} color={color} />;
          }}}
          />
        <Tab.Screen 
          name='Conta' 
          component={Account} 
          options={{tabBarIcon:  ({ color, size }) => {
            let iconName='user';
            return <Icon name={iconName} size={size} color={color} />;
          }}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}