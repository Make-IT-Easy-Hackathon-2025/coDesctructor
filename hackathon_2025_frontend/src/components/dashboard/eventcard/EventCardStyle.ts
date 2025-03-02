import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        height: height * 0.35,
        width: 300,
        borderRadius: 25,
        padding: 30,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    upper: {
        flex: 1,
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
    },
    image: {
        width: 50,
        height: 50,
    },
    titleText: {
        marginTop: 20,
        color: "#fff",
        fontSize: 25,
        fontFamily: "Raleway-SemiBold",
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Raleway-Regular",
    },
    progressBarContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    progressBar: {
        width: "80%",
        height: 5,
        backgroundColor: "#ccc",
        borderRadius: 5,
        overflow: "hidden",
        position: "relative",
        flexDirection: "row",
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#fff", // Completed progress color (Green)
        position: "absolute",
        left: 0,
    },
    progressRemaining: {
        height: "100%",
        backgroundColor: "#808080", // Remaining progress color (Red)
        position: "absolute",
        right: 0,
    },
    progressText: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 10,
        fontFamily: "Raleway-Regular",
    },
});
