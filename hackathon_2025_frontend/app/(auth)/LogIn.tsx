import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import useLogInStyle from "./logInStyle";
import colors from "../../src/constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import LoginApiClient from "../../src/implementations/LoginApiClient";
import {useRouter} from "expo-router";
import {UserApiClient} from "../../api/userApiCalls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "../../src/components/animation/Animation";

const LogIn = () => {
  const styles = useLogInStyle();
  const [password, setPassword] = useState(""); // State for password
  const [email, setEmail] = useState(""); // State for email

  const loginApiClient = new LoginApiClient();
  const userApiClient = new UserApiClient();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await loginApiClient.login(email, password);
      const user = await userApiClient.getUserByEmailAddress(email);

      await AsyncStorage.setItem("user", JSON.stringify(user));

      router.push("/(tabs)");
    } catch (error) {
      console.error("Login error:", error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
        <LoadingScreen />
    );
  }

  return (
    <ImageBackground
      source={require("../../src/assets/logInScreen/log_In_Screen.jpg")}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="position"
        style={styles.innerContainer}
      >
        <View
          style={{
            backgroundColor: colors.background,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Sign in to Your Account</Text>
          </View>
          <View style={styles.inputContainer}>
            {/* Passing the setEmail as onChangeText for EmailInput */}
            <View style={styles.emailContainer}>
              <Ionicons
                name="mail-outline"
                size={24}
                color={colors.primary}
                style={styles.emailIcon}
              />
              <TextInput
                style={styles.emailInput}
                placeholder={"Enter Your Email"}
                value={email} // Controlled input
                onChangeText={setEmail}
              />
            </View>
            {/* Passing the setPassword as onChangeText for PasswordInput */}
            <View style={styles.passwordContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color={colors.primary}
                style={styles.passwordIcon}
              />
              <TextInput
                style={styles.passwordInput}
                placeholder={"Enter Your Password"}
                secureTextEntry={true}
                value={password} // Controlled input
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine} />
          <Text style={styles.orText}>Or sign in with</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="logo-google" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="logo-apple" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="logo-facebook" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LogIn;
