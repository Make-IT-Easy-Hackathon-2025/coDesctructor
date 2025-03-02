import {
  ImageBackground,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity, Alert,
} from "react-native";
import { styles } from "./eventScreenStyle";
import { useEffect, useState } from "react";
import { Event } from "../../src/entities/Event";
import { EventApiCalls } from "../../api/eventCalls";
import { Picker } from "@react-native-picker/picker";
import { format } from "date-fns";
import { useRouter } from "expo-router";
import LoadingScreen from "../../src/components/animation/Animation";

const EventScreen = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await EventApiCalls.getEvents();
        setEvents(response.data);
        setSelectedEvent(response.data[0]);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  const openURL = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };
  const handleBackPress = () => {
    router.back();
  };
  const handleApplyPress = async (event: Event) => {
    setLoading(true);
    try {
      await EventApiCalls.pushEvent(event);
      router.back()
    } catch (error) {
      Alert.alert("Try again later :(");
      router.back()
    } finally {
      setLoading(false);
    }

  };
  if (loading) {
    return (<LoadingScreen/>)
  }
  return (
    <ImageBackground
      source={require("../../src/assets/eventScreen/EventScreen.jpg")}
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {selectedEvent?.name || "Select an Event"}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedEvent?.imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.descriptionText}>
            <Text style={styles.keyWord}>Description:</Text>{" "}
            {selectedEvent?.description || "No description available"}
          </Text>
          <Text style={styles.descriptionText}>
            <Text style={styles.keyWord}>Duration:</Text>{" "}
            {selectedEvent?.duration || "No duration available"}
            <Text> hour</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text style={styles.keyWord}>Deadline:</Text>{" "}
            {selectedEvent?.deadline
              ? format(new Date(selectedEvent.deadline), "yyyy-MM-dd HH:mm")
              : "No deadline available"}
          </Text>
          {selectedEvent?.url && (
            <TouchableOpacity onPress={() => openURL(selectedEvent.url)}>
              <Text style={styles.linkText}>{selectedEvent.url}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => {
              handleBackPress();
            }}
          >
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.applyButton]}
            onPress={() => handleApplyPress(selectedEvent || events[0])}
          >
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedEvent?.id}
          onValueChange={(itemValue) => {
            const selected = events.find((event) => event.id === itemValue);
            setSelectedEvent(selected || null);
          }}
          style={styles.picker}
        >
          {events.map((event) => (
            <Picker.Item
              key={event.id}
              label={event.name}
              value={event.id}
              style={styles.pickerItem}
            />
          ))}
        </Picker>
      </View>
    </ImageBackground>
  );
};

export default EventScreen;
