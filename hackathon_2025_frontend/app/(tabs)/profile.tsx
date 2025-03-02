import { View, Text, Image, Task } from "react-native";
import useProfileStyle from "../../src/styles/profileStyle";
import PersonalInfo from "../../src/components/profilePage/PersonalInfo";
import CompletedDiagramChart from "../../src/components/profilePage/CompletedDiagramChart";
import { UserApiClient } from "../../api/userApiCalls";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../../src/entities/User";

const Profile = () => {
  const styles = useProfileStyle();
  const userApiClient = new UserApiClient();

  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          setUser(JSON.parse(userData) as User);
        }
      } catch (error) {
        console.error("Error getting user:", error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await userApiClient.getUserByEmailAddress(email);
        setUser(userResponse.data);
        setName(userResponse.firstName);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setName(user?.firstName || "");
    setEmail(user?.email || "");
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Profile</Text>
      </View>
      <View style={styles.profilePhotoContainer}>
        <Image
          source={require("../../src/assets/profile/profile.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.personalInfoContainer}>
        <PersonalInfo name={name} email={email} />
      </View>
      <View style={styles.completedTasksContainer}>
        <CompletedDiagramChart />
      </View>
    </View>
  );
};

export default Profile;
