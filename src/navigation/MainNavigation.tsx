import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { MainNavigationProps, MainStackParamList } from './navigationInterface';
import About from '../entities/screens/about';
import MainHeader from '../entities/layout/partials/MainHeader';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator<MainStackParamList>();

const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="Home"
        component={BottomNavigation}
        options={{
          headerShown: true,
          title: '',
          header: () => <MainHeader />,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: true,
          title: '',
          header: () => <Text>this is header </Text>,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
