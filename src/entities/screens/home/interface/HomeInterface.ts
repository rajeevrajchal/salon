import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../../../navigation/navigationInterface';

export interface HomeScreenProps {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
}

export interface FacilityInterface {
  id: number;
  name: string;
  time: string;
  rating: number;
  price: number;
}

export interface HomeStateInterface {
  facilities: FacilityInterface[];
  type?: string;
}
