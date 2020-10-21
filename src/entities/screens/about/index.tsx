import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import style from './styles';
import {StackParamList} from "../../../navigation/navigationInterface";
import layout from "../../../assets/styles/layout";

interface AboutScreenProps {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
}

const About: React.FC<AboutScreenProps> = (props) => {
    const {navigation} = props
    return (
        <SafeAreaView style={layout.safeArea}>
            <Text style={style.text}>About Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
        </SafeAreaView>
    );
}

export default About
