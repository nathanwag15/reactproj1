import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';

const TextScreen = () => {
    const [name, setName] = useState('')
    return(
        <View>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />

            <Text>My name is {name}</Text>
        </View>
    );    
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    }
});

export default TextScreen;