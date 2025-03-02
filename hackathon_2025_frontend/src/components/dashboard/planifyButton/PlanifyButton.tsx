import React from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from "./PlanifyButtonStyle";
import { LinearGradient } from 'react-native-linear-gradient';

const PlanifyButton = () => {
    return (
        <LinearGradient
            colors={["#145858", "#C8E0CA"]}
            start={{ x: 0, y: 0 }} // Start from top-left
            end={{ x: 1, y: 1 }} // End at bottom-right
            style={styles.container}>
            <View>
                <Text style={styles.textUpper}>Planify</Text>
                <Text style={styles.textLower}>your next activity!</Text>
            </View>
            <Image
                source={require("./planify_button_image.png")}
                style={styles.image}
            />

        </LinearGradient>
    );
};

export default PlanifyButton;