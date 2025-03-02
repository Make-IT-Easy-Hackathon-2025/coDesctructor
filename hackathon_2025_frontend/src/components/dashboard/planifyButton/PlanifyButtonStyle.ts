import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 25,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 25,
        width: "100%",
        height: 110,
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "#FFD700",
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    textUpper: {
        fontSize: 28,
        fontFamily: "Raleway-Bold",
        marginLeft: 10,
        color: "#fff",
    },
    textLower: {
        fontSize: 20,
        fontFamily: "Raleway-Regular",
        marginLeft: 10,
        color: "#fff",
    },
});