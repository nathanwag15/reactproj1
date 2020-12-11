import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const yourname = "Nathan"
    
    return(
        <View>
            <Text style={styles.textStyle}>Getting Started with react native</Text>
            <Text style={styles.subHeaderStyle}>Ny name is {yourname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;