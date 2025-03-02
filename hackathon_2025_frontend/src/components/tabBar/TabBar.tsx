import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

import React from "react";

import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import colors from "../../constants/colors";

const height = Dimensions.get("window").height;

const TabBar = ({ state, descriptors, navigation } : BottomTabBarProps) => {
    return (
        <View style={styles.tabbar}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconName = "home";
                if (route.name === "index") iconName = "home-outline";
                if (route.name === "calendar") iconName = "calendar-outline";
                if (route.name === "profile") iconName = "person-outline";

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabBarItem}
                    >
                        <View style={{ backgroundColor: isFocused ? colors.secondary : "transparent", borderRadius: 50, padding: isFocused ? 8 : 0, marginBottom: isFocused ? -12 : 0}}>
                            <Ionicons name={iconName} size={isFocused ? 32 : 25} color={ isFocused ? "white" : "black"}/>
                        </View>

                        <Text
                            style={[
                                styles.iconText,
                                {
                                    opacity: isFocused ? 0 : 1, // Ha fokozott a fókusz, a szöveg eltűnik
                                },
                            ]}
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabbar: {
        flexDirection: "row",
        height: height * 0.09,
        position: "absolute",
        bottom: 0,
        marginBottom: height * 0.04,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 50,
        alignSelf: "center",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tabBarItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconText: {
        fontSize: 12,
        fontFamily: "Raleway-SemiBold",
        color: "#222"
    }
})

export default TabBar;