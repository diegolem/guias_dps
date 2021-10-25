import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Appbar, DarkTheme } from "react-native-paper";
import PetCard from "../components/PetCard";

const catList = [
    {
        id: '1',
        name: 'Maine Coon',
        img: require('../img/cats/cat1.jpg')
    },
    {
        id: '2',
        name: 'British Shortair',
        img: require('../img/cats/cat2.jpg')
    },
    {
        id: '3',
        name: 'Siames',
        img: require('../img/cats/cat3.jpg')
    },
    {
        id: '4',
        name: 'Ragdoll',
        img: require('../img/cats/cat4.jpg')
    },
    {
        id: '5',
        name: 'Fold Escoces',
        img: require('../img/cats/cat5.jpg')
    }
]

export default function Cat() {
    return (
        <View style={style.font}>
            <Appbar.Header>
                <Appbar.Content title='Cats' />
            </Appbar.Header>
            <FlatList
                data={catList}
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