import React from "react";
import {View, Text, Image, ImageSourcePropType} from "react-native";
import {styles} from "./ActivityTypeCardStyle";

type ActivityTypeCardProps = {
    activityCardTitle: string;
    activityCardImage: ImageSourcePropType;
    activityCardDescription: string;
};

export const ActivityTypeCard = (props: ActivityTypeCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.title}>{props.activityCardTitle}</Text>
                <Text style={styles.description}>{props.activityCardDescription}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={props.activityCardImage}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};
