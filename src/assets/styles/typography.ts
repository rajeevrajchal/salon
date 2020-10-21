import { StyleSheet, TextStyle } from 'react-native';

import {fonts, padding} from './vars';
import color from "./color";

interface Styles {
    title: TextStyle;
    subTitle: TextStyle;
    linkText: TextStyle;
    textCenter: TextStyle;
    errorText: TextStyle;
}

const typography = StyleSheet.create<Styles>({
    title: {
        fontSize: fonts.md,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    subTitle: {
        fontSize: fonts.sm,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    linkText: {
        color: color.active,
    },
    textCenter: {
        textAlign: 'center',
    },
    errorText:{
        color:color.danger
    }
});

export default typography;
