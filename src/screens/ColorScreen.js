import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList,Text } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    console.log(colors);
    return (
    <View>
        <Button 
            title="Add a color"
            onPress={ () => {
                setColors([...colors, randomRgb()]);
            }} 
        />




        <FlatList
        keyExtractor={(item) => item}
            data={colors}
            renderItem={({ item })=>{
                return <View style={{ height: 100, width: 100, backgroundColor: item}}><Text>{item}</Text></View>
            }}
        />
    </View>);
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const style = StyleSheet.create({});

export default ColorScreen;