import { StyleSheet } from 'react-native';
import colors from '../../src/constants/colors';

const useWelcomeStyle = () => {
    return StyleSheet.create({
        backgroundImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            width: "100%",
            height: "100%",
        },
        innerContainer: {
            height: "40%",
            width: "100%",
            bottom: 0,
            position: "absolute",
        },
        textContainer: {
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "30%",
            alignSelf: "center",
        },
        textUpper: {
            textAlign: "center",
            fontSize: 35,
            fontFamily: "Raleway-Regular",
        },
        textLower: {
            textAlign: "center",
            color: colors.primary,
            fontSize: 35,
            fontFamily: "Raleway-Medium",
        },
        descriptionContainer: {
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "30%",
            alignSelf: "center",
        },
        descriptionText: {
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Raleway-Regular",
        },
        planifyText: {
            color: colors.primary,
        },
        buttonContainer: {
            width: "100%",
            height: "30%",
            justifyContent: "center",
            alignItems: "center",
        }
    })
}

export default useWelcomeStyle;