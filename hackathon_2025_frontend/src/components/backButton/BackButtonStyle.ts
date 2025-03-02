import {StyleSheet} from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        borderColor: colors.backButtonBackground,
        backgroundColor: colors.backButtonBackground,
        borderRadius: 25,
        width: 225,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "15%",
        marginBottom: "-10%",
    },
    text:{
        fontFamily: "Raleway-Medium",
        fontSize: 16,
        color: colors.primary,
    }
});