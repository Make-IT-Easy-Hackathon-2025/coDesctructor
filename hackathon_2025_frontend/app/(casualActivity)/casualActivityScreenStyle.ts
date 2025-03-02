import { Dimensions, StyleSheet } from "react-native";
import colors from "../../src/constants/colors";
import { linkTo } from "expo-router/build/global-state/routing";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    card: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: width * 0.88,
        padding: 15,
        height: height * 0.45,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    titleContainer: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "Raleway-Medium",
        fontSize: 26,
        color: colors.primary,
    },
    inputContainer: {
        flexDirection: "row",
        width: "97%",
        paddingHorizontal: 10,
        height: 50,
        alignSelf: "center",
        marginBottom: 20,
        backgroundColor: "white",
    },
    nameInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: "Raleway-Regular",
        width: "100%",
        height: "100%",
        backgroundColor: colors.primaryFont,
        borderRadius: 20,
        paddingLeft: 10
    },
    littleInputContainer: {
        flexDirection: "row",
        width: "97%",
        paddingHorizontal: 10,
        height: 50,
        alignSelf: "center",
        marginBottom: 20,
        backgroundColor: "white",
        justifyContent: "space-between",
        borderRadius: 20,
    },
    littleInput: {
        fontSize: 16,
        fontFamily: "Raleway-Regular",
        width: "35%",
        height: "100%",
        backgroundColor: colors.primaryFont,
        borderRadius: 20,
        paddingLeft: 10
    },
    saveButton: {
        width: "97%",
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    saveButtonText: {
        fontSize: 18,
        fontFamily: "Raleway-Bold",
        color: "#fff",
    },
    picker: {
        width: "60%",
        height: "100%",
        backgroundColor: colors.primaryFont,
        borderRadius: 20
    },
});