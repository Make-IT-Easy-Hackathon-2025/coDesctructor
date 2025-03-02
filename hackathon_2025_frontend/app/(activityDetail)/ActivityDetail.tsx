import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image} from 'react-native';
import {useSearchParams} from "expo-router/build/hooks";
import {ActivityTask} from "../../src/entities/ActivityTask";
import ActivityCalls from "../../api/activityCalls";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useRouter} from "expo-router";

const width = Dimensions.get("window").width;
import colors from "../../src/constants/colors";
import LoadingScreen from "../../src/components/animation/Animation";

const ActivityDetail = () => {
    const eventId = useSearchParams().get("eventId");
    const title = useSearchParams().get("title");
    const [tasks, setTasks] = useState<ActivityTask[]>([]);
    const activityApiCalls = new ActivityCalls();
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    // Fetch activity tasks
    useEffect(() => {
        setLoading(true);
        const fetchTasks = async () => {
            try {
                const response = await activityApiCalls.getActivityTasksByActivityId(eventId as unknown as number).then();

                setTasks(response);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTasks();
        setLoading(false);
    }, [eventId]);

    const toggleTaskComplete = async (index: number) => {
        const updatedTask = {
            ...tasks[index],
            completed: !tasks[index].completed,
        };

        try {
            setTasks(prevTasks =>
                prevTasks.map((task, i) => (i === index ? updatedTask : task))
            );

            await activityApiCalls.updateTaskStatus(updatedTask.id, updatedTask);

        } catch (error) {
            console.error("Hiba a feladat frissítése közben: ", error);
        }
    };

    if(loading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <ImageBackground source={require("../../src/assets/activityDetail/background.jpg")} style={styles.background}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.titleView}>
                <Text style={styles.title}>{title}</Text>
            </View>


            {tasks.length === 0 ? (
                <View style={styles.placeholderView}>
                    <Text style={styles.placeholderText}>Congrats, You Mastered Your Time!</Text>
                    <Image style={{width: width, height: 500}} source={require("../../src/assets/calendarScreen/placeholder.jpg")} />
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {tasks.map((task, index) => (
                        <View key={index} style={styles.cardView}>
                            <TouchableOpacity
                                style={styles.iconContainer}
                                onPress={() => toggleTaskComplete(index)}
                            >
                                <Ionicons
                                    name={task.completed ? "checkmark-circle" : "checkmark-circle-outline"}
                                    size={40}
                                    color={colors.primary}
                                />
                            </TouchableOpacity>
                            <Text style={styles.taskTitle}>{task.name}</Text>
                            <Text style={styles.infoText}>
                                {task.startTime?.slice(11, -3)} - {task.endTime?.slice(11, -3)} - {task.day}
                            </Text>
                        </View>
                    ))}
                </ScrollView>


            )}


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    titleView: {
        marginTop: 50,
        marginBottom: 50,
        flexDirection: "row",
    },
    title: {
        fontSize: 30,
        fontFamily: "Raleway-Bold",
        color: "white"
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    cardView: {
        backgroundColor: "white",
        padding: 36,
        margin: 10,
        borderRadius: 24,
        width: width * 0.8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    taskTitle: {
        fontSize: 24,
        fontFamily: "Raleway-SemiBold",
        color: "black"
    },
    infoText: {
        fontSize: 14,
        fontFamily: "Raleway-Regular",
        color: colors.primary
    },
    iconContainer: {
        position: "absolute",
        right: 10,
        top: 10
    },
    placeholderView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    placeholderText: {
        fontSize: 20,
        color: colors.primary,
        fontFamily: "Raleway-SemiBold",
        marginBottom: 20,
    }
})

export default ActivityDetail;