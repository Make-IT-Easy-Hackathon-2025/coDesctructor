import { StyleSheet } from "react-native";
import colors from "../../src/constants/colors";

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
        width: "88%",
        padding: 15,
        marginBottom: 20,
        height: "70%",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    pickerContainer: {
        width: "88%",
        backgroundColor: "#fff",
        height: "auto",
        borderRadius: 25,
        paddingHorizontal: 10,
    },
    picker: {
        height: 'auto',
        width: "100%",
    },
    pickerItem: {
        fontSize: 19,
        fontFamily: "Raleway-Thin",
        color: "black",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        marginBottom: 20,
        flexWrap: "wrap",
    },
    title: {
        fontSize: 24,
        fontFamily: "Raleway-Medium",
        color: "black",
        textAlign: "center",
    },
    imageContainer: {
        width: "100%",
        height: "20%",
        marginBottom: 20,
        borderRadius: 20,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    contentContainer: {
        width: "100%",
        height: "auto",
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
    },
    descriptionText: {
        fontSize: 18,
        fontFamily: "Raleway-Regular",
        marginBottom: 10,
    },
    keyWord: {
        color: colors.primary,
    },
    linkText: {
        color: colors.primary,
        textDecorationLine: "underline",
        marginTop: 10,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        backgroundColor: "#007bff",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: "48%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Raleway-Medium",
        textAlign: "center",
    },
    applyButton: {
        width: "70%",
        backgroundColor: colors.primary,
        fontSize: 18,
        borderRadius: 20,
    },
    backButton: {
        width: "18%",
        backgroundColor: colors.secondaryFont,
        borderRadius: 300,
        aspectRatio: 1,
    }
})
