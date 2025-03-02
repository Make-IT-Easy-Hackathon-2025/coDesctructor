import {StyleSheet} from "react-native";
import colors from "../../src/constants/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    headerContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    image: {
        width: 65,
        height: 65,
        marginRight: 24,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 50,
    },
    headerText: {
        fontSize: 24,
        fontFamily: "Raleway-Regular",
    },
    headerTextContainer: {
        flexDirection: "row",
        marginRight: 24,
    },
    headerName: {
        fontSize: 24,
        fontFamily: "Raleway-Bold",
    },
    bodyContainer: {},
    titleText: {
        fontSize: 36,
        marginTop: 36,
        fontFamily: "Raleway-SemiBold",
        marginBottom: 24,
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
        marginTop: 24,
    },
    text: {
        fontSize: 20,
        fontFamily: "Raleway-Regular",
    },
    masterText: {
        fontSize: 20,
        fontFamily: "Raleway-Bold",
        color: colors.primary
    },
    noContent: {
        flexDirection: "column",
        alignItems: "center",
    },
    noContentText: {
        fontSize: 22,
        fontFamily: "Raleway-Regular",
        textAlign: "center",
        opacity: 0.5,
    },
    noContentTextContainer: {
        marginTop: 46,
        marginBottom: 46,
    },
    newActivityButton: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 24,
    },
    newActivityButtonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Raleway-Bold",
    },
    linearGradient: {
        padding: 16,
        borderRadius: 25,
    },
});