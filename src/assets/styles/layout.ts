import {ImageProps, Platform, StyleSheet, ViewStyle} from 'react-native';
import {padding} from './vars';
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from "./color";

interface Styles {
    safeArea: ViewStyle;
    safeAreaTop: ViewStyle;
    safeAreaSecondaryTop: ViewStyle;
    safeAreaPadding: ViewStyle;
    flexOne: ViewStyle;
    displayRow?: ViewStyle;
    displayColumn?: ViewStyle;
    displayCenter?: ViewStyle;
    displayBetween?: ViewStyle;
    displayEnd?: ViewStyle;
    displayStart?: ViewStyle;
    alignCenter?: ViewStyle;
    itemCenter?: ViewStyle;
    sectionTop?: ViewStyle;
    sectionBottom?: ViewStyle;
    sectionVertical?: ViewStyle;
    sectionHorizontal?: ViewStyle;
    boxShadow?: ViewStyle;
    containerPadding?: ViewStyle;
    contentVerticalPadding?: ViewStyle;
    contentHorizontalPadding?: ViewStyle;
    img?: ImageProps;
    roundedImage?: ImageProps;
    badgeStyle?: ViewStyle;
    inputField?: ViewStyle;
    inputBox?: ViewStyle;
    inputIcon?: ViewStyle;
    card?: ViewStyle
}

const layout = StyleSheet.create<Styles>({
    // safeArea
    safeArea: {
        flex:1,
        backgroundColor: color.background
    },

    safeAreaTop: {
        marginTop: hp('18%'),
    },

    safeAreaSecondaryTop: {
        marginTop: Platform.OS === "ios" ? hp('10%') : hp('7%'),
    },

    safeAreaPadding: {
        padding: padding.md,
    },

    // flex-properties
    flexOne: {
        flex: 1,
    },
    displayRow: {
        flexDirection: 'row',
    },
    displayColumn: {
        flexDirection: 'column',
    },

    displayCenter: {
        justifyContent: 'center',
    },

    displayBetween: {
        justifyContent: 'space-between',
    },

    displayEnd: {
        justifyContent: 'flex-end',
    },
    displayStart: {
        justifyContent: 'flex-start',
    },
    alignCenter: {
        alignContent: 'center',
    },
    itemCenter: {
        alignItems: 'center',
    },

    // screen or sections
    sectionTop: {
        marginTop: padding.md,
    },
    sectionBottom: {
        marginBottom: padding.md,
    },
    sectionVertical: {
        marginVertical: padding.md,
    },
    sectionHorizontal: {
        marginHorizontal: padding.md,
    },

    // box-shadow
    boxShadow: {
        shadowColor: color.dark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.62,
    },

    //content
    containerPadding: {
        padding: padding.md,
    },

    contentVerticalPadding: {
        paddingVertical: padding.md,
    },

    contentHorizontalPadding: {
        paddingHorizontal: padding.md,
    },

    //images
    img: {
        width: '100%',
        height: '100%',
    },
    roundedImage: {
        width: '100%',
        height: '100%',
        borderRadius: padding.sm,
    },

    //cards
    card:{
        backgroundColor: color.light,
        padding:padding.md,
        borderRadius:padding.md
    },

    //badge
    badgeStyle: {
        position: 'absolute',
        top: -6,
        right: -8,
    },

    //form
    inputField: {
        flex: 1,
        padding: padding.md - padding.xs,
        color: '#424242',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        borderRadius: padding.xl,
        marginBottom: padding.md,
        backgroundColor: color.light,
        paddingHorizontal:padding.md
    },
    inputIcon: {
        padding: 10,
    }
});

export default layout;
