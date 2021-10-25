import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Appbar, DarkTheme } from "react-native-paper";
import PetCard from "../components/PetCard";

const dogList = [
    {
        id: '1',
        name: 'Pastor Aleman',
        img: require('../img/dogs/dog1.jpg')
    },
    {
        id: '2',
        name: 'Husky siberiano',
        img: require('../img/dogs/dog2.jpg')
    },
    {
        id: '3',
        name: 'Doberman',
        img: require('../img/dogs/dog3.jpg')
    },
    {
        id: '4',
        name: 'Shih Tzu',
        img: require('../img/dogs/dog4.jpg')
    },
    {
        id: '5',
        name: 'Chow Chow',
        img: require('../img/dogs/dog5.jpg')
    }
]

export default function DogS() {
    return (
        <View style={style.font}>
            <Appbar.Header>
                <Appbar.Content title='Dogs' />
            </Appbar.Header>
            <FlatList
                data={dogList}
                renderItem={
                    ({ item }) => (
                        <PetCard item={item} />
                    )
                }
            />
        </View>
    )
}

const style = StyleSheet.create({
    font: {
        flex: 1,
        backgroundColor: DarkTheme.colors.background
    }
})