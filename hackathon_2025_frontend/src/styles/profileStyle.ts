import { StyleSheet } from "react-native";
import colors from "../constants/colors";
const useProfileStyle = () => {

    return StyleSheet.create({
        container: {
            padding: 14,
            flex: 1,
            width: '100%',
            backgroundColor: colors.background,
        },
        textContainer: {
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "4%",
            marginTop: "7%",
            alignSelf: "center",
        },
        text: {
            fontFamily: "Raleway-Regular",
            fontSize: 25
        },
        profilePhotoContainer: {
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 500,
            borderWidth: 0.5,
            borderColor: colors.primary,
        },
        profileImage: {
            width: 110,
            height: 110,
            borderRadius: 70,
        },
        personalInfoContainer: {
            marginTop: "7%",
            marginBottom: "5%",
            width: "100%",
            height: "15%",
            alignSelf: "center",
        },
        completedTasksContainer: {
            borderRadius: 20,
            marginTop: "10%",
            width: "100%",
            height: "40%",
            alignSelf: "center",
            backgroundColor: 'white',
        }
    });

}

export default useProfileStyle
