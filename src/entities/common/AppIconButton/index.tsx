import React from 'react';
import { TouchableOpacity } from 'react-native';
import AppIcon from "../AppIcon";

interface AppIconButtonPropsInterface {
    iconName: string;
    iconColor?: string;
    iconSize?: number;
    onPressAction: () => void;
}
const AppIconButton: React.FC<AppIconButtonPropsInterface> = (props) => {
    const { iconName, iconColor, iconSize, onPressAction } = props;
    return (
        <TouchableOpacity onPress={onPressAction}>
            <AppIcon iconName={iconName} iconColor={iconColor} iconSize={iconSize} />
        </TouchableOpacity>
    );
};

export default AppIconButton;
