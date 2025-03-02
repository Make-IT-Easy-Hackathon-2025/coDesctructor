import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Platform, TouchableOpacity, StatusBar
} from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import colors from "../../src/constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import {TimerPickerModal} from "react-native-timer-picker";
import {LinearGradient} from "react-native-svg";
import {SetStateAction, useState} from "react";
import * as Haptics from "expo-haptics";
import ActivityCalls from "../../api/activityCalls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MultipleSelectList} from "react-native-dropdown-select-list/index";
import Activity from "../../src/entities/Activity";
import {getMoment} from "react-native-calendars/src/momentResolver";
import {useRouter} from "expo-router";
import {ActivityTask} from "../../src/entities/ActivityTask";

const FixedActivity = () => {

    const activityCalls = new ActivityCalls();

    const [daysOfWeek, setDaysOfWeek] = useState([]);

    const [name, setName] = useState("");

    const [showStartPicker, setshowStartPicker] = useState(false);
    const [showEndPicker, setshowEndPicker] = useState(false);
    const [startTime, setStartTime] = useState<
        string | null
    >(null);

    const [endTime, setEndTime] = useState<
        string | null
    >(null);

    const router = useRouter();

    const formatTime = ({
                            hours,
                            minutes,
                        }: {
        hours?: number;
        minutes?: number;
    }) => {
        const timeParts = [];
        if (hours !== undefined) {
            timeParts.push(hours.toString().padStart(2, "0"));
        }
        if (minutes !== undefined) {
            timeParts.push(minutes.toString().padStart(2, "0"));
        }
        return timeParts.join(":");
    };

    const saveTheInput = async () => {
        const userString = await AsyncStorage.getItem("user");
        // @ts-ignore
        const user = JSON.parse(userString);

        const activity:Activity = {
            name: name,
            duration: 0,
            priority: 3,
            activityType: 0,
            deadline: "",
            userId: user.id,
            tasks: [],
        };

        const activityResponse = await activityCalls.createActivity(activity);

        const activityId = activityResponse.id;

        daysOfWeek.forEach((day) => {
            const date = new Date();
            const dayIndex = date.getDay();
            const daysToAdd = day + dayIndex;
            date.setDate(date.getDate() + daysToAdd);
            const startTime = date.toISOString();
            date.setHours(date.getHours() + 1);
            const endTime = date.toISOString();

            const tasks:ActivityTask[] = [
                {
                    name: name,
                    startTime: startTime.slice(0, -5),
                    endTime: endTime.slice(0, -5),
                    day: day,
                    activityId: activityId,
                    completed: false,
                    whenCompleted: null,
                }
            ];

            tasks.forEach(async (task) => {
                await activityCalls.createActivityTasks(activityId, task).then((response) => {
                    console.log("Task response: ", response);
                }).catch((error) => {
                    console.log("Task error: ", error);
                });
            })


            router.push("ActivitySelectionScreen");
        });


    };

    const multipleSelectListData = [
        { key: '0', value: 'Monday' },
        { key: '1', value: 'Tuesday' },
        { key: '2', value: 'Wednesday' },
        { key: '3', value: 'Thursday' },
        { key: '4', value: 'Friday' },
        { key: '5', value: 'Saturday' },
        { key: '6', value: 'Sunday' },
    ];

    // @ts-ignore
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <ImageBackground style={styles.background} source={require("../../src/assets/fixedActivity/background.jpg")}>
            <View style={styles.modalView}>
                <View style={styles.horizontalLine} />
                <TextInput placeholder="Enter your activity name..." style={styles.nameInput} value={name} onChangeText={setName}/>
                <View style={styles.horizontalLine2} />
                <View style={styles.clockView}>
                    <TouchableOpacity style={styles.inputContainer} onPress={() => setshowStartPicker(true)}>
                        <Ionicons name="time-outline" size={24} color={colors.primary} style={styles.icon} />
                        <Text style={styles.durationInput}>{startTime ? startTime : "HH:MM"}</Text>
                    </TouchableOpacity>
                    <View style={styles.arrowView}>
                        <Ionicons name="arrow-forward-outline" size={24} color={colors.primaryFont} style={styles.arrowIcon} />
                    </View>
                    <TouchableOpacity style={styles.inputContainer} onPress={() => setshowEndPicker(true) }>
                        <Ionicons name="time-outline" size={24} color={colors.primary} style={styles.icon} />
                        <Text style={styles.durationInput}>{endTime ? endTime : "HH:MM"}</Text>
                    </TouchableOpacity>
                </View>


                <MultipleSelectList
                search={false}
                setSelected={(val: SetStateAction<never[]>) => setDaysOfWeek(val)}
                defaultOption={{ key: '0', value: 'Monday' }}
                data={multipleSelectListData}
                label="Days of the week"
                placeholder="Select days of the week"
                fontFamily="Raleway-Regular"
                boxStyles={styles.multipleSelectListBox}
                inputStyles={styles.multipleSelectListInput}
                dropdownStyles={styles.multipleSelectListDropdown}
                badgeStyles={{ backgroundColor: colors.primary, color: colors.background }}
                labelStyles={styles.labelStyles}
                maxHeight={150}
                />

                <TouchableOpacity style={styles.saveButton} onPress={() => {saveTheInput()}}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>
            <TimerPickerModal
                visible={showStartPicker}
                setIsVisible={setshowStartPicker}
                onConfirm={(pickedDuration) => {
                    setStartTime(formatTime(pickedDuration));
                    setshowStartPicker(false);
                }}
                modalTitle="Set your start time"
                onCancel={() => setshowStartPicker(false)}
                closeOnOverlayPress
                LinearGradient={LinearGradient}
                Haptics={Haptics}
                styles={{
                    theme: "dark",
                    confirmButton: {
                        backgroundColor: colors.secondaryFont,
                    },
                    cancelButton: {
                        backgroundColor: colors.primary,
                    },
                }}
                modalProps={{
                    overlayOpacity: 0.2,
                }}
            />
            <TimerPickerModal
                visible={showEndPicker}
                setIsVisible={setshowEndPicker}
                onConfirm={(pickedDuration) => {
                    setEndTime(formatTime(pickedDuration));
                    setshowEndPicker(false);
                }}
                modalTitle="Set your end time"
                onCancel={() => setshowEndPicker(false)}
                closeOnOverlayPress
                LinearGradient={LinearGradient}
                Haptics={Haptics}
                styles={{
                    theme: "dark",
                    confirmButton: {
                        backgroundColor: colors.secondaryFont,
                    },
                    cancelButton: {
                        backgroundColor: colors.primary,
                    },
                }}
                modalProps={{
                    overlayOpacity: 0.2,
                }}
            />
        </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    modalView: {
        height: height * 0.65,
        backgroundColor: "white",
        borderRadius: 40,
        width: width * 0.9,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    horizontalLine: {
        width: "50%",
        height: 0.5,
        backgroundColor: colors.primary,
        marginVertical: 20,
    },
    horizontalLine2: {
        width: "80%",
        height: 0.5,
        backgroundColor: colors.primary,
        marginVertical: 20,
    },
    nameInput: {
        width: "90%",
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        fontSize: 18,
        fontFamily: "Raleway-Regular",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        paddingHorizontal: 20,
        height: 50,
        width: "35%",
        alignSelf: "center",
        marginBottom: 20,
        backgroundColor: colors.background,
    },
    durationInput: {
        flex: 1,
        fontSize: 14,
        fontFamily: "Raleway-Regular",
    },
    icon: {
        marginRight: 10,
        marginBottom: -3,
    },
    clockView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    },
    arrowView: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 50,
        width: "12%",
        marginBottom: 20,
        backgroundColor: colors.secondaryFont,
    },
    arrowIcon: {
        marginBottom: -3,
    },
    dateButton: {
        width: "90%",
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    dateInput: {
        fontSize: 18,
        fontFamily: "Raleway-Regular",
        justifyContent: "center",
        alignItems: "center",
    },
    saveButton: {
        width: "90%",
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    saveText: {
        fontSize: 18,
        fontFamily: "Raleway-Regular",
        color: colors.background,
    },
    multipleSelectListBox: {
        backgroundColor: colors.background,
        fontFamily: 'IBMPlexSerif',
        borderRadius: 35,
        paddingLeft: 16,
        minWidth: '90%',
        maxWidth: '90%',
        borderWidth: 0,
    },
    multipleSelectListInput: {
        fontFamily: 'IBMPlexSerif',
        color: colors.primary,
        opacity: 0.75,
        maxWidth: '90%',
    },
    multipleSelectListDropdown: {
        backgroundColor: "white",
        fontFamily: 'IBMPlexSerif',
        borderRadius: 10,
        paddingLeft: 16,
        minWidth: '90%',
        maxWidth: '90%',
    },
    labelStyles: {
        color: colors.primary,
        fontFamily: 'IBMPlexSerif',
        fontSize: 18,
    }
});

export default FixedActivity;