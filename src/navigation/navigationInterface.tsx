import { StackNavigationProp } from '@react-navigation/stack';

export type MainStackParamList = {
  Home: undefined;
  About: undefined;
};

export type BottomStackParamList = {
  Home: undefined;
  About: undefined;
  MyAccount: undefined;
};

export type StackParamList = MainStackParamList & BottomStackParamList;

export type mainNavigation = StackNavigationProp<MainStackParamList, any>;

export interface MainNavigationProps {
  navigation?: mainNavigation;
}
