import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        height: 130,
        width: "94%",
        flexDirection: "row",
        padding: 4,
    },
    title: {
        fontFamily: "Raleway-Medium",
        fontSize: 24,
        color: "#fff",
        marginBottom: "5%",
    },
    image: {
        height: 100,
        width: 100,
    },
    description: {
        fontFamily: "Raleway-Thin",
        fontSize: 14,
        color: "#fff",
        opacity: 0.5,
    },
    textView: {
        padding: 20,
        width: "65%",
        paddingLeft: "10%",
    },
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "35%",
        padding: 12,
    }
});