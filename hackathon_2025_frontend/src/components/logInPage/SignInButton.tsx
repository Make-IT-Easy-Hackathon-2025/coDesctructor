import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../../constants/colors"; // Import your colors

type props = {
  onPress: () => void;
};

const SignInButton = (props: props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary, // Background color for the button
    borderRadius: 10, // Rounded corners
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 30, // Horizontal padding
    alignItems: "center", // Center the text horizontally
    marginTop: 20, // Space from other elements
    width: "100%", // Button takes the full width of its parent container
  },
  buttonText: {
    color: "white", // White text color
    fontSize: 18, // Font size
    fontFamily: "Raleway-Bold", // Font style
    textAlign: "center", // Center text inside button
  },
  container: {
    width: "90%", // Ensure container is 90% of its parent width
    alignItems: "center", // Align button in the center horizontally
    alignSelf: "center", // Center the container itself within its parent
  },
});

export default SignInButton;
