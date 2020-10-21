import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

interface AppIconPropsInterface {
    iconName: string;
    iconColor?: string;
    iconSize?: number;
}

const AppIcon: React.FC<AppIconPropsInterface> = (props) => {
    const { iconName, iconColor, iconSize } = props;
    return (
        <Icon name={iconName} color={iconColor ? iconColor : 'black'} size={iconSize ? iconSize : 25} />
    );
};

export default AppIcon;
