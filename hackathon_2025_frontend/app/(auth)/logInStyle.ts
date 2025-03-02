import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../src/constants/colors';
const useLogInStyle = () => {
    const { width, height } = Dimensions.get('window');
    return StyleSheet.create({
        backgroundImage: {
            flex: 1,
            width: width,
            // borderBlockColor: "green",
            // borderWidth: 1,
            justifyContent: "flex-end",

        },
        innerContainer: {
            backgroundColor: colors.background,
            borderRadius: 30,
            width: width,
        },
        textContainer: {
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15%",
            marginTop: "10%",
            // height: "10%",
            alignSelf: "center",
        },
        text: {
            fontSize: 26,
            fontFamily: "Raleway-Medium",
        },
        inputContainer: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        scrollView: {
            flex: 1,
        },
        button: {
            backgroundColor: colors.primary, // Background color for the button
            borderRadius: 20, // Rounded corners
            paddingVertical: 15, // Vertical padding
            paddingHorizontal: 30, // Horizontal padding
            alignItems: "center", // Center the text horizontally
            marginTop: 20, // Space from other elements
        },
        buttonText: {
            color: "white", // White text color
            fontSize: 18, // Font size
            fontFamily: "Raleway-Bold", // Font style
            textAlign: "center", // Center text inside button
        },
        buttonContainer: {
            width: "90%",
        },
        horizontalLine: {
            width: "80%",
            height: 0.5,
            backgroundColor: colors.primary,
            marginVertical: 20,
        },
        orText: {
            fontSize: 16,
            fontFamily: "Raleway-Regular",
            color: "black",
            opacity: 0.5,
            marginBottom: 20,
        },
        iconContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 65,
        },
        iconButton: {
            marginHorizontal: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 100,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 2,
        },
        emailContainer: {
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            paddingHorizontal: 10,
            height: 50,
            width: "90%",
            alignSelf: "center",
            marginBottom: 20,
            backgroundColor: "white",
        },
        emailIcon: {
            marginRight: 10,
        },
        emailInput: {
            flex: 1,
            fontSize: 16,
            fontFamily: "Raleway-Regular",
            width: "100%",
            height: "100%",
        },
        passwordContainer: {
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            paddingHorizontal: 10,
            height: 50,
            width: "90%",
            alignSelf: "center",
            backgroundColor: "white",
        },
        passwordIcon: {
            marginRight: 10,
        },
        passwordInput: {
            flex: 1,
            fontSize: 16,
            fontFamily: "Raleway-Regular",
            width: "100%",
            height: "100%",
        },
    })
}

export default useLogInStyle;