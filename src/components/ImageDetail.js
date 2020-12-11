import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import beach from '../../assets/beach.jpg';
import forest from '../../assets/forest.jpg';
import mountain from "../../assets/mountain.jpg";



const ImageDetail = ({imageSource, title, score}) => {
return (
        <View>
                <Image source={props.imageSource} />
                <Text>{props.title}</Text>
                <Text>Image Score - {props.score}</Text>
        </View>
        )
};

const styles = StyleSheet.create({});

export default ImageDetail;