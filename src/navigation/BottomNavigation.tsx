import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import color from '../assets/styles/color';
import Home from '../entities/screens/home';
import About from '../entities/screens/about';
import AppIcon from '../entities/common/AppIcon';
import { BottomStackParamList } from './navigationInterface';
import { Platform } from 'react-native';

const Tab = createMaterialBottomTabNavigator<BottomStackParamList>();

const BottomNavigation: React.FC = () => {
  const ACTIVE_TAB_COLOR = color.active;
  const INACTIVE_TAB_COLOR = color.dark;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        labeled={false}
        activeColor={ACTIVE_TAB_COLOR}
        inactiveColor={INACTIVE_TAB_COLOR}
        barStyle={{
          position: 'absolute',
          backgroundColor: color.background,
          marginBottom: Platform.OS === 'ios' ? -10 : 0,
          overflow: 'hidden',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <AppIcon
                iconName={'home'}
                iconColor={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                iconSize={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ focused }) => (
              <AppIcon
                iconName={'message1'}
                iconColor={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                iconSize={24}
              />
            ),
          }}
        />

        <Tab.Screen
          name="MyAccount"
          component={Home}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ focused }) => (
              <AppIcon
                iconName={'user'}
                iconColor={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
                iconSize={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
