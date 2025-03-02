import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./BackButtonStyle";

const BackButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Back to dashboard</Text>
        </View>
    );
}

export default BackButton;