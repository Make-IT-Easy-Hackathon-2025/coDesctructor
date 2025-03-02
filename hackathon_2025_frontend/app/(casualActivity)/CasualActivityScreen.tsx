import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./casualActivityScreenStyle";
import { Picker } from "@react-native-picker/picker";
import { ActivityType } from "../../src/entities/ActivityType";
import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Activity from "../../src/entities/Activity";
import {Event} from "../../src/entities/Event"
import ActivityCalls from "../../api/activityCalls";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Use the correct import
import {EventApiCalls} from "../../api/eventCalls";
import { useRouter } from "expo-router";
import LoadingScreen from "../../src/components/animation/Animation";

const CasualActivityScreen = () => {
  const [activityName, setActivityName] = useState("");
  const [duration, setDuration] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [selectedActivity, setSelectedActivity] = useState<ActivityType>(
    ActivityType.EDUCATIONAL
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [user, setUser] = useState(null); // State to store user data
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  // Fetch user data from AsyncStorage when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };
    fetchUserData();
  }, []);

  const handlePlanWithAI = async () => {
    setLoading(true);
    // Validate inputs
    if (!activityName.trim() || !duration.trim()) {
      Alert.alert("Error", "Please fill in all fields before proceeding.");
      return;
    }

    // Ensure deadline is a valid Date object
    if (!(deadline instanceof Date) || isNaN(deadline.getTime())) {
      Alert.alert("Error", "Please select a valid deadline.");
      return;
    }

    // Collecting data
    const activityData: Event = {
      description: "",
      imageUrl: "",
      url: "",
      name: activityName,
      duration: parseInt(duration),
      deadline: deadline.toISOString()
    };

    // ActivityCalls.postCustomActivity(activityData, user["email"]);

    try {
      await EventApiCalls.pushEvent(activityData);
      router.back();
    } catch (error) {
      Alert.alert("Model error", "Try again later");
      router.back();
    }


    setLoading(false);
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || deadline;
    setShowDatePicker(false);
    setDeadline(currentDate);
  };

  if(loading) {
    return <LoadingScreen/>
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../src/assets/casualActivityScreen/CasualActivityScreen.jpg")}
        style={styles.container}
      >
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Custom Activity</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.nameInput}
              placeholder={"Enter your activity name"}
              onChangeText={setActivityName}
            />
          </View>
          <View style={styles.littleInputContainer}>
            <TextInput
              style={styles.littleInput}
              placeholder={"Duration"}
              keyboardType="numeric"
              onChangeText={setDuration}
            />
            <Picker
              selectedValue={selectedActivity}
              onValueChange={(itemValue) => setSelectedActivity(itemValue)}
              style={styles.picker}
            >
              <Picker.Item
                label="Educational"
                value={ActivityType.EDUCATIONAL}
              />
              <Picker.Item label="Sports" value={ActivityType.SPORTS} />
              <Picker.Item label="Musics" value={ActivityType.MUSICS} />
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.saveButtonText}>
              {showDatePicker ? "Hide Date Picker" : "Set Deadline"}
            </Text>
          </TouchableOpacity>

          {/* Conditionally render the DateTimePicker (system built-in picker) */}
          {showDatePicker && (
            <DateTimePicker
              value={deadline}
              mode="date"
              display="default" // 'default' uses the system's built-in date picker
              onChange={onDateChange}
            />
          )}

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handlePlanWithAI}
          >
            <Text style={styles.saveButtonText}>Plan with AI</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default CasualActivityScreen;
