import React from "react";
import {View, Text, Image, ViewStyle, TouchableOpacity} from "react-native";
import { styles } from "./EventCardStyle";
import {useRouter} from "expo-router";

type eventProps = {
    id: number;
    title: string;
    remainingDays: number;
    progress: number;
    style?: ViewStyle;
};

const EventCard = (props: eventProps) => {
    const remainingProgress = 100 - props.progress; // Calculate remaining percentage

    const route = useRouter();

    const handlePress = () => {
        console.log("Event Card Pressed");
        route.push(`/ActivityDetail?eventId=${props.id}&title=${props.title}`);
    };

    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={handlePress}>
            <View style={styles.upper}>
                <Image source={require("./event_logo.png")} style={styles.image} />
                <Text style={styles.titleText}>{props.title}</Text>
            </View>

            <View>
                {props.remainingDays > 1 ? (
                    <Text style={styles.text}>Remaining {props.remainingDays} days </Text>
                ) : (
                    <Text style={styles.text}>Remaining {props.remainingDays} day</Text>
                )}

                {/* Progress Bar with Remaining Indicator */}
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar}>
                        {/* Filled Progress */}
                        <View style={[styles.progressFill, { width: `${props.progress}%` }]} />
                        {/* Remaining Progress Indicator */}
                        <View style={[styles.progressRemaining, { width: `${remainingProgress}%` }]} />
                    </View>

                    <Text style={styles.progressText}>{props.progress}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default EventCard;
