import { TouchableOpacity, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useRouter} from "expo-router";

const WelcomePageButton = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/(auth)/LogIn");
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.textContainer}>
        <Ionicons
          name="calendar-outline"
          size={25}
          color={colors.primaryFont}
        />
        <Text style={styles.text}>Plan your week</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "90%",
    height: 58,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.primaryFont,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    fontFamily: "Raleway-Regular",
    marginLeft: 10,
  },
});

export default WelcomePageButton;
