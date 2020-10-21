import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {mainNavigation} from "../../../../navigation/navigationInterface";
import layout from "../../../../assets/styles/layout";
import styles from "./styles";
import AppIcon from "../../../common/AppIcon";

const MainHeader: React.FC = () => {
    const navigation = useNavigation<mainNavigation>();
    return (
        <SafeAreaView style={{paddingTop:10}}>
            <View style={[
                layout.displayRow,
                layout.itemCenter,
                layout.alignCenter,
                layout.displayBetween,
                layout.contentHorizontalPadding,
            ]}>
                <AppIcon
                    iconName={'appstore-o'}
                    iconSize={30}
                />
                <TouchableOpacity
                    onPress={() => console.log('hello world ')}
                    style={styles.mainHeaderImage}>
                    <Image
                        style={layout.img}
                        resizeMode={"contain"}
                        source={require('../../../../assets/images/woman.png')}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MainHeader;
