import {Dimensions, StyleSheet} from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "black",
        height: height * 0.05,
        width: width * 0.4,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
    },
    containerNoFocus: {
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "white",
        height: height * 0.05,
        width: width * 0.4,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        marginRight: 20,
    },
    text: {
        fontSize: 16,
        fontFamily: "Raleway-Regular",
        color: "white",
    },
    textNoFocus: {
        fontSize: 16,
        fontFamily: "Raleway-Regular",
        color: "black",
    },
    number:{
        backgroundColor: "#F7BC18",
        borderRadius: 25,
        width: 25,
        height: 25,
        marginLeft: 10,
        alignItems: "center",
    },
    numberNoFocus:{
        backgroundColor: "black",
        borderRadius: 25,
        width: 25,
        height: 25,
        marginLeft: 10,
        alignItems: "center",
    },
    numberText: {
        fontSize: 16,
        fontFamily: "Raleway-Bold",
        color: "black",
    },
    numberTextNoFocus: {
        fontSize: 16,
        fontFamily: "Raleway-Bold",
        color: "white",
    },
});