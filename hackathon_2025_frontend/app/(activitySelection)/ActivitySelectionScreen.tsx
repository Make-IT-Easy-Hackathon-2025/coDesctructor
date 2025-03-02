import React from "react";
import {
  ImageBackground,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../src/components/backButton/BackButton";

import { styles } from "./ActivitySelectionStyle";
import { ActivityTypeCard } from "../../src/components/activityTypeCard/ActivityTypeCard";
import { useRouter } from "expo-router";
import Page from "../(tabs)";

const ActivitySelectionScreen = () => {
  const route = useRouter();

  return (
    <ImageBackground
      source={require("../../src/assets/selectionScreen/selection_background.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Choose your activity type</Text>

      <TouchableOpacity onPress={() => route.navigate("FixedActivity")}>
        <ActivityTypeCard
          activityCardTitle="Fixed activity"
          activityCardImage={require("../../src/assets/selectionScreen/fixed_activity_image.png")}
          activityCardDescription="Fix your priority activites"
        />
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity onPress={() => route.push("/CasualActivityScreen")}>
        <ActivityTypeCard
          activityCardTitle="Casual activity"
          activityCardImage={require("../../src/assets/selectionScreen/casual_activity_image.png")}
          activityCardDescription="Master your time withthe power of AI ✨"
        />
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity onPress={() => route.push("/EventScreen")}>
        <ActivityTypeCard
          activityCardTitle="Goal"
          activityCardImage={require("../../src/assets/selectionScreen/goal_image.png")}
          activityCardDescription="Aim for the toughest challenges in your sport life"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => route.replace("/(tabs)")}>
        <BackButton />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ActivitySelectionScreen;
