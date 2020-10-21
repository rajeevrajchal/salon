import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import style from './styles';
import { StackParamList } from '../../../navigation/navigationInterface';
import layout from '../../../assets/styles/layout';
import { openModal } from '../../common/AppModal/service/appModalAction';
import AppModal from '../../common/AppModal';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

interface AboutScreenProps {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
}

const About: React.FC<AboutScreenProps> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch<Dispatch<any>>();
  return (
    <SafeAreaView style={layout.safeArea}>
      <Text style={style.text}>About Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <View>
        <Text onPress={() => dispatch(openModal())}>Open modal </Text>
      </View>
      <AppModal>
        <Text style={style.text}>Modal Screen</Text>
      </AppModal>
    </SafeAreaView>
  );
};

export default About;
