import React from "react";
import {Text, View, ViewStyle} from "react-native";
import {styles} from "./EventPickerStyle";

type EventPickerProps = {
    eventType: string;
    numberOfEvents: number;
    inFocus?: boolean;
};

const EventPicker = (props: EventPickerProps) => {
    return props.inFocus ? (
            <View style={styles.container}>
                {/* Event Picker */}
                <Text style={styles.text}>{props.eventType}</Text>
                <View style={styles.number}>
                    <Text style={styles.numberText}>{props.numberOfEvents}</Text>
                </View>
            </View>) :
        (
            <View style={styles.containerNoFocus}>
                {/* Event Picker */}
                <Text style={styles.textNoFocus}>{props.eventType}</Text>
                <View style={styles.numberNoFocus}>
                    <Text style={styles.numberTextNoFocus}>{props.numberOfEvents}</Text>
                </View>
            </View>
        )
}

export default EventPicker;