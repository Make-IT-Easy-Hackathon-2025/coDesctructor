import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";

interface Props {
  onValueChange: (text: string) => void; // Callback to pass the password value
}

const PasswordInput: React.FC<Props> = ({ onValueChange }: Props) => {
  const [password, setPassword] = useState(""); // Local state for password

  return (
    <View style={styles.container}>
      <Ionicons
        name="lock-closed-outline"
        size={24}
        color={colors.primary}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={"Enter Your Password"}
        secureTextEntry={true}
        value={password} // Controlled input
        onChangeText={(text) => {
          setPassword(text); // Update local state
          onValueChange(text); // Pass the value to the parent
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Raleway-Regular",
    width: "100%",
    height: "100%",
  },
});

export default PasswordInput;
