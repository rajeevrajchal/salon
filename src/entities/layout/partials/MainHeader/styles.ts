import {StyleSheet, ViewStyle} from 'react-native';
import color from "../../../../assets/styles/color";

interface MainHeaderStyles {
    mainHeaderImage: ViewStyle
}

export default StyleSheet.create<MainHeaderStyles>({
    mainHeaderImage: {
        width: 35,
        height: 35,
        borderRadius:30,
        backgroundColor: color.default
    }
});
