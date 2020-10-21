import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, Text, View} from 'react-native';

import style from './styles';
import layout from "../../../assets/styles/layout";
import typography from "../../../assets/styles/typography";

import Search from "../../layout/partials/search";
import Category from "./components/category";
import Facility from "./components/facilities";

import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {FacilityInterface, HomeScreenProps} from "./interface/HomeInterface";


import {
    fetchFacilityData
} from './services/homeAction'
import {RootState} from "../../../store/interface/storeInterface";

const mockFacility = require('./mockFacility.json');

const Home: React.FC<HomeScreenProps> = (props) => {
    const {navigation} = props
    const [keyword, setKeyword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch<Dispatch<any>>()

    const {facilities} = useSelector((state: RootState) => state.homeReducer)

    useEffect(() => {
        (
            async function () {
                setLoading(true)
                await dispatch(fetchFacilityData())
                setLoading(false)
            }
        )();
    }, [])

    return (
        <View style={layout.safeArea}>
            <SafeAreaView style={layout.safeAreaSecondaryTop}>
                <View style={layout.containerPadding}>
                    <Search
                        setKeyword={setKeyword}
                    />
                    <View style={layout.sectionTop}>
                        <Category/>
                    </View>
                </View>

                <View>
                    <Text style={[typography.title, layout.containerPadding]}> Talents </Text>
                    <ScrollView
                        keyboardDismissMode={"on-drag"}
                        keyboardShouldPersistTaps={"never"}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={[
                            layout.contentHorizontalPadding,
                            style.serviceScroll
                        ]}>
                        {
                            loading ? <ActivityIndicator size="large"/> :
                                facilities ? facilities.map((facility: FacilityInterface, index: number) => (
                                    <View style={layout.contentVerticalPadding} key={index}>
                                        <Facility facility={facility}/>
                                    </View>
                                )) : <Text> No Data </Text>
                        }

                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default Home
