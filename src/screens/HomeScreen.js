import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes } from "react-native";

const HomeScreen = props => {
  return (
    <View>
        <Text style={styles.text}>Howdy There!</Text>
        <Button 
          title="Go to Components Demo"
          onPress={() => props.navigation.navigate("Components")}
           />
        <Button onPress={() => props.navigation.navigate('List')} title="go to list demo"/>
        <Button onPress={() => props.navigation.navigate('Image')} title="go to Images"/>
             
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
