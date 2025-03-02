import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import {useFocusEffect, useRouter} from "expo-router";
import {styles} from "./indexStyle";
import PlanifyButton from "../../src/components/dashboard/planifyButton/PlanifyButton";
import EventCard from "../../src/components/dashboard/eventcard/EventCard";
import EventPicker from "../../src/components/dashboard/eventPicker/EventPicker";
import {act, useCallback, useEffect, useState} from "react";
import ActivityCalls from "../../api/activityCalls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../../src/entities/User";
import Activity from "../../src/entities/Activity";
import LottieView from "lottie-react-native";
import LoadingScreen from "../../src/components/animation/Animation";

const Page = () => {
    const route = useRouter();
    const [activity, setActivity] = useState<Activity[]>([]);
    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(false);

    const handlePress = () => {
        console.log("Pressed");
        route.push("ActivitySelectionScreen");
    }

    useEffect(() => {
        setLoading(true);
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
        setLoading(false);
    }, []);

    const name = user?.firstName;
    const userId = user?.id;

    const [selectedEventType, setSelectedEventType] = useState('All');


    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                try {
                    const response = await ActivityCalls.getUserActivities(userId);
                    setActivity(response.data);
                } catch (error) {
                    console.error("Error fetching activities:", error);
                }
            };
            if (userId) {
                fetchData();
            }
        }, [userId])
    );

    // build event card list from activities
    const eventCardList = activity.map(act => {
        // Calculate remaining days
        const remainingDays = act.deadline
            ? Math.max(0, Math.ceil((new Date(act.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
            : 0; // Default if deadline is null

        // Calculate progress (completed tasks / total tasks)
        const totalTasks = act.tasks.length;
        const completedTasks = act.tasks.filter(task => task.completed).length;
        const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        return {
            id: act.id,
            title: act.name,
            remainingDays,
            progress,
            type: act.activityType,
        };
    });

    const [eventPickerList, setEventPickerList] = useState([
        {eventType: "All", numberOfEvents: activity.length, inFocus: true},
        {eventType: "Educational", numberOfEvents: activity.filter(act => act.type === "EDUCATIONAL").length, inFocus: false},
        {eventType: "Sport", numberOfEvents: activity.filter(act => act.type === "SPORTS").length, inFocus: false},
        {eventType: "Music", numberOfEvents: activity.filter(act => act.type === "MUSIC").length, inFocus: false},
    ]);

    useEffect(() => {
        setLoading(true);
        if (activity.length === 0)
            return;
        setEventPickerList([
            {eventType: "All", numberOfEvents: activity.length, inFocus: true},
            {eventType: "Educational", numberOfEvents: activity.filter((act) => act.activityType == "EDUCATIONAL").length, inFocus: false},
            {eventType: "Sports", numberOfEvents: activity.filter((act) => act.activityType == "SPORTS").length, inFocus: false},
            {eventType: "Music", numberOfEvents: activity.filter((act) => act.activityType == "MUSIC").length, inFocus: false},
        ]);
        setLoading(false);
    }, [activity]);

    // Handle press event to toggle focus
    const handlePressEvent = (index: number) => {
        setEventPickerList(prevList =>
            prevList.map((event, i) => ({
                ...event,
                inFocus: i === index, // Only set clicked event to true
            }))
        );
        const eventType = eventPickerList[index].eventType;
        setSelectedEventType(eventType);
    };
    const filteredEventCardList = eventCardList.filter((event) => {
        if (selectedEventType === 'All') {
            return true; // Show all events if 'All' is selected
        }
        return event.type == selectedEventType.toUpperCase(); // Show only events that match the selected type
    });

    if (loading) {
        return (
            <LoadingScreen />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Hello, </Text>
                    <Text style={styles.headerName}>{name}</Text>
                </View>
                    <Image
                        source={require("../../src/assets/profile/profile.png")}
                        style={styles.image}
                    />

            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.titleText}>See your {'\n'}progress now</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {eventPickerList.map((event, index) => (
                        <TouchableOpacity key={index} onPress={() => handlePressEvent(index)}>
                            <EventPicker
                                eventType={event.eventType}
                                numberOfEvents={event.numberOfEvents}
                                inFocus={event.inFocus}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {filteredEventCardList.length > 0 ? (
                    // If user has activities, display event cards
                    <>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>My </Text>
                            <Text style={styles.masterText}>Master Time </Text>
                            <Text style={styles.text}>Plan</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {filteredEventCardList.map((event, index) => (
                                <EventCard
                                    key={event.id}
                                    id = {event.id}
                                    title={event.title}
                                    remainingDays={event.remainingDays}
                                    progress={event.progress}
                                    style={{ marginRight: index === filteredEventCardList.length - 1 ? 0 : 20 }}
                                />
                            ))}
                        </ScrollView>
                        <TouchableOpacity onPress={handlePress} style={styles.newActivityButton}>
                            <Text style={styles.newActivityButtonText}>Add New Activity</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    // If no activities, show empty screen
                    <View style={styles.noContent}>
                        <View style={styles.noContentTextContainer}>
                            <Text style={styles.noContentText}>
                                You don’t have any activities {'\n'} Feel free! ;)
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => route.push("ActivitySelectionScreen")}>
                            <PlanifyButton />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
}

export default Page;