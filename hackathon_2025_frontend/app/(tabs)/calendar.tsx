import {View, Text, StyleSheet, Dimensions, Image} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../../src/entities/User";
import {Agenda} from "react-native-calendars";

import colors from "../../src/constants/colors";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Calendar = () => {

    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(false);

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
        if (user) {
            const allTasks = user.activities.flatMap(activity => activity.tasks);
            // @ts-ignore
            setTasks(allTasks);
        }
    }, [user]);

    const formatTasksForAgenda = (tasks: any[]) => {
        return tasks.reduce((acc, task) => {
            const date = task.startTime.split("T")[0];
            if (!acc[date]) acc[date] = [];
            acc[date].push({ name: task.name });
            return acc;
        }, {});
    };

    const agendaItems = formatTasksForAgenda(tasks);

    return (
        <View style={styles.container}>
            <View style={styles.spacer} />
            <Agenda
                items={agendaItems}
                selected={Date.now()}
                renderItem={(item) => {
                    return (
                        <View style={styles.taskCard}>
                            <Text style={styles.taskCardText}>{item.name}</Text>
                        </View>
                    );
                }}
                rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                renderEmptyData = {() => {
                    return (
                        <View style={styles.placeholderView}>
                            <Text style={styles.placeholderText}>Congrats, You Mastered Your Time!</Text>
                            <Image style={{width: width, height: 500}} source={require("../../src/assets/calendarScreen/placeholder.jpg")} />
                        </View>
                    );
                }}
                theme={{
                    backgroundColor: colors.background,
                    calendarBackground: colors.background,
                    agendaKnobColor: colors.primary,
                    selectedDayBackgroundColor: colors.primary,
                    agendaDayBackgroundColor: "red", // Lista háttere
                    dotColor: colors.primary,
                    selectedDotColor: colors.primary,
                    todayTextColor: colors.primary,
                    textSectionTitleColor: colors.primary,
                    textDayHeaderFontFamily: "Raleway-Bold",
                    textDayHeaderFontSize: 15,
                    textDayFontFamily: "Raleway-Regular",
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    taskCard: {
        backgroundColor: colors.primary,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        height: height * 0.1,
    },
    spacer: {
        height: 30,
    },
    taskCardText: {
        color: "white",
        fontSize: 24,
        fontFamily: "Raleway-Regular",
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
});

export default Calendar;