import {View, Text, ImageBackground, StatusBar} from "react-native";
import useWelcomeStyle from "./welcomeStyle";
import WelcomePageButton from "../../src/components/welcomePage/WelcomPageButton";
import {useRouter} from "expo-router";

const Welcome = () => {
  const styles = useWelcomeStyle();

  return (
    <ImageBackground
      source={require("../../src/assets/welcomeScreen/WelcomeScreen.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textUpper}>Master Your Time,</Text>
          <Text style={styles.textLower}>Own Your Day.</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            With intuitive scheduling and real-time progress tracking,{" "}
            <Text style={styles.planifyText}>Planify</Text> empowers you to
            boost productivity, and make smarter decisions.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <WelcomePageButton />
        </View>
      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
};

export default Welcome;
