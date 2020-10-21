import React, {Dispatch, useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import color from "../../../../assets/styles/color";
import layout from "../../../../assets/styles/layout";
import AppIcon from "../../../common/AppIcon";

interface SearchProps {
    setKeyword: (value: string) => void
}
const Search:React.FC<SearchProps> = (props) => {
    const {
        setKeyword
    } = props
    const handleChange = (value: string) => {
        setKeyword(value)
    }
    return (
        <>
            <View style={[layout.inputBox, layout.boxShadow]}>
                <AppIcon
                    iconName={'search1'}
                />
                <TextInput
                    onChangeText={value => handleChange(value)}
                    style={layout.inputField}
                    placeholder={"Search ..."}
                    placeholderTextColor={color.dark}
                />
            </View>
        </>
    );
};

export default Search;
