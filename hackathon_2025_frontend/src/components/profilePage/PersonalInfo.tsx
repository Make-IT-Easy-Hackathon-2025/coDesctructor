import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../constants/colors";

export interface PersonalInfoProps {
  name: string;
  email: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = (props) => {
  return (
    <View style={styles.personalInfoContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.containerName}>Personal info</Text>
      </View>
      <View style={styles.infoOutterContainer}>
        <Ionicons name="person-outline" size={24} style={styles.icon} />
        <View style={styles.infoInnerContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{props.name}</Text>
        </View>
      </View>
      <View style={styles.infoOutterContainer}>
        <Ionicons name="mail-outline" size={24} style={styles.icon} />
        <View style={styles.infoInnerContainer}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>{props.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  personalInfoContainer: {
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 3,
  },
  infoOutterContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginLeft: "8%",
    marginBottom: 10,
  },
  infoInnerContainer: {},
  label: {
    fontSize: 13,
    fontFamily: "Raleway-Regular",
    marginRight: 5,
    color: colors.secondaryFont,
  },
  value: {
    fontSize: 15,
    color: "black",
    fontFamily: "Raleway-Regular",
  },
  textContainer: {
    marginTop: 6,
    marginBottom: 18,
    marginLeft: "8%",
    width: "auto",
  },
  containerName: { fontFamily: "Raleway-Bold", fontSize: 19 },
  icon: { marginRight: 10 },
});

export default PersonalInfo;
